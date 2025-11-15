import axios from 'axios';

class ChunkedUploader {
	constructor(file, categoryId, onProgress, apiBaseUrl = '') {
		this.file = file;
		this.categoryId = categoryId;
		this.onProgress = onProgress;
		this.chunkSize = 5 * 1024 * 1024; // 5MB
		this.totalChunks = Math.ceil(file.size / this.chunkSize);
		this.uploadSessionId = null;
		this.fileId = null;
		this.isPaused = false;
		this.isCancelled = false;
		this.uploadedChunks = new Set();
		this.apiBaseUrl = apiBaseUrl;
	}

	async initialize() {
		try {
			const response = await axios.post(
				`${this.apiBaseUrl}/api/sketchshaper-pro-files/initialize`,
				{
					name: this.file.name.replace(/\.[^/.]+$/, ''), // Remove extension
					sketchshaper_pro_category_id: this.categoryId,
					totalChunks: this.totalChunks,
					totalSize: this.file.size,
					originalFilename: this.file.name,
				}
			);

			this.uploadSessionId = response.data.data.uploadSessionId;
			this.fileId = response.data.data.fileId;
			return true;
		} catch (error) {
			console.error('Failed to initialize upload:', error);
			return false;
		}
	}

	async uploadChunk(chunkIndex) {
		const start = chunkIndex * this.chunkSize;
		const end = Math.min(start + this.chunkSize, this.file.size);
		const chunk = this.file.slice(start, end);

		const formData = new FormData();
		formData.append('uploadSessionId', this.uploadSessionId);
		formData.append('chunkIndex', chunkIndex);
		formData.append('chunk', chunk);

		try {
			const response = await axios.post(
				`${this.apiBaseUrl}/api/sketchshaper-pro-files/upload-chunk`,
				formData,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			);

			this.uploadedChunks.add(chunkIndex);

			if (this.onProgress) {
				this.onProgress({
					uploadedChunks: this.uploadedChunks.size,
					totalChunks: this.totalChunks,
					progress: (this.uploadedChunks.size / this.totalChunks) * 100,
					chunkIndex,
				});
			}

			return true;
		} catch (error) {
			console.error(`Failed to upload chunk ${chunkIndex}:`, error);
			return false;
		}
	}

	async start() {
		// Initialize upload
		const initialized = await this.initialize();
		if (!initialized) return false;

		// Upload chunks with retry logic
		for (let i = 0; i < this.totalChunks; i++) {
			if (this.isCancelled) break;

			while (this.isPaused) {
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}

			let retries = 3;
			let success = false;

			while (retries > 0 && !success) {
				success = await this.uploadChunk(i);
				if (!success) {
					retries--;
					await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait before retry
				}
			}

			if (!success) {
				console.error(`Failed to upload chunk ${i} after retries`);
				return false;
			}
		}

		// Complete upload
		if (!this.isCancelled) {
			return await this.complete();
		}

		return false;
	}

	async complete() {
		try {
			const response = await axios.post(
				`${this.apiBaseUrl}/api/sketchshaper-pro-files/complete`,
				{
					uploadSessionId: this.uploadSessionId,
					originalFilename: this.file.name,
				}
			);

			return response.data.data;
		} catch (error) {
			console.error('Failed to complete upload:', error);
			return false;
		}
	}

	async resume() {
		try {
			// Get upload status
			const response = await axios.get(
				`${this.apiBaseUrl}/api/sketchshaper-pro-files/status/${this.uploadSessionId}`
			);
			const { uploadedChunksList } = response.data.data;

			// Mark already uploaded chunks
			uploadedChunksList.forEach((index) => this.uploadedChunks.add(index));

			// Resume from where we left off
			this.isPaused = false;
			return await this.start();
		} catch (error) {
			console.error('Failed to resume upload:', error);
			return false;
		}
	}

	pause() {
		this.isPaused = true;
	}

	async cancel() {
		this.isCancelled = true;
		try {
			await axios.delete(
				`${this.apiBaseUrl}/api/sketchshaper-pro-files/cancel/${this.uploadSessionId}`
			);
		} catch (error) {
			console.error('Failed to cancel upload:', error);
		}
	}

	getProgress() {
		return (this.uploadedChunks.size / this.totalChunks) * 100;
	}

	getStatus() {
		return {
			uploadSessionId: this.uploadSessionId,
			fileId: this.fileId,
			uploadedChunks: this.uploadedChunks.size,
			totalChunks: this.totalChunks,
			progress: this.getProgress(),
			isPaused: this.isPaused,
			isCancelled: this.isCancelled,
		};
	}
}

export default ChunkedUploader;
