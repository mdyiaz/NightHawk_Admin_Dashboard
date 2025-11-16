import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useGetSketchShaperProCategoriesQuery } from '@/store/api/app/SketchShaperPro/sketchShaperProCategoryApiSlice';
import ChunkedUploader from '@/utils/ChunkedUploader';
import UploadQueue from '@/utils/UploadQueue';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Fileinput from '@/components/ui/Fileinput';
import { useUpdateSketchShaperProFilePreviewMutation } from '@/store/api/app/SketchShaperPro/sketchShaperProApiSlice';
import { useForm } from 'react-hook-form';

const SketchShaperProFileUpload = () => {
	const { auth } = useSelector((state) => state.auth);
	const { data: categoriesData } = useGetSketchShaperProCategoriesQuery();
	const [selectedCategory, setSelectedCategory] = useState('');
	const [uploads, setUploads] = useState([]);
	const uploadQueueRef = useRef(null);
	const fileInputRef = useRef(null);
	const [updateFilePreview] = useUpdateSketchShaperProFilePreviewMutation();

	const { control, watch } = useForm({
		defaultValues: {
			preview_image: null,
		},
	});

	useEffect(() => {
		uploadQueueRef.current = new UploadQueue(1, (queueStatus) => {
			// Update UI when queue status changes
			const allItems = [
				...queueStatus.all.queued,
				...queueStatus.all.active,
				...queueStatus.all.completed,
				...queueStatus.all.failed,
			];
			
			setUploads((prev) => {
				return prev.map((upload) => {
					const queueItem = allItems.find((item) => item.id === upload.id);
					if (queueItem) {
						// Show toast notification on completion
						if (queueItem.status === 'completed' && upload.status !== 'completed') {
							toast.success(`✅ ${upload.name} uploaded successfully!`);
							// Upload preview image if selected
							const previewImage = watch('preview_image')?.[0];
							if (previewImage && queueItem.uploader?.fileId) {
								handleUploadPreviewImage(queueItem.uploader.fileId, previewImage);
							}
						}
						// Show toast notification on failure
						if (queueItem.status === 'failed' && upload.status !== 'failed') {
							toast.error(`❌ Failed to upload ${upload.name}`);
						}
						return {
							...upload,
							status: queueItem.status,
						};
					}
					return upload;
				});
			});
		});

		return () => {
			uploadQueueRef.current?.clear();
		};
	}, []);

	const handleFileSelect = async (e) => {
		const files = Array.from(e.target.files);

		if (!selectedCategory) {
			alert('Please select a category first');
			return;
		}

		files.forEach((file) => {
			let itemId = null;

			const uploader = new ChunkedUploader(
				file,
				selectedCategory,
				(progress) => {
					// Update progress for the specific upload item
					setUploads((prev) =>
						prev.map((u) =>
							u.id === itemId
								? {
										...u,
										progress: progress.progress,
										uploadedChunks: progress.uploadedChunks,
										totalChunks: progress.totalChunks,
									}
								: u
						)
					);
				},
				''
			);

			itemId = uploadQueueRef.current.add(uploader, {
				fileName: file.name,
				fileSize: file.size,
			});

			setUploads((prev) => [
				...prev,
				{
					id: itemId,
					name: file.name,
					size: file.size,
					progress: 0,
					status: 'queued',
					uploadedChunks: 0,
					totalChunks: uploader.totalChunks,
					uploader,
				},
			]);
		});

		// Reset file input
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	const handlePause = (id) => {
		const upload = uploads.find((u) => u.id === id);
		if (upload) {
			upload.uploader.pause();
			setUploads((prev) =>
				prev.map((u) => (u.id === id ? { ...u, status: 'paused' } : u))
			);
		}
	};

	const handleResume = async (id) => {
		const upload = uploads.find((u) => u.id === id);
		if (upload) {
			setUploads((prev) =>
				prev.map((u) => (u.id === id ? { ...u, status: 'uploading' } : u))
			);
			await uploadQueueRef.current.resume(id);
			setUploads((prev) =>
				prev.map((u) => (u.id === id ? { ...u, status: 'completed' } : u))
			);
		}
	};

	const handleCancel = async (id) => {
		const upload = uploads.find((u) => u.id === id);
		if (upload) {
			await uploadQueueRef.current.cancel(id);
			setUploads((prev) => prev.filter((u) => u.id !== id));
		}
	};

	const handleRemove = (id) => {
		uploadQueueRef.current.remove(id);
		setUploads((prev) => prev.filter((u) => u.id !== id));
	};

	const formatBytes = (bytes) => {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	};

	const getStatusColor = (status) => {
		switch (status) {
			case 'completed':
				return 'bg-green-100 text-green-800';
			case 'uploading':
				return 'bg-blue-100 text-blue-800';
			case 'paused':
				return 'bg-yellow-100 text-yellow-800';
			case 'failed':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};

	const handleUploadPreviewImage = async (fileId, previewImageFile) => {
		if (!previewImageFile) return;

		try {
			const formData = new FormData();
			formData.append('preview_image', previewImageFile);

			await updateFilePreview({ id: fileId, data: formData });
			toast.success('✅ Preview image uploaded successfully!');
		} catch (error) {
			console.error('Failed to upload preview image:', error);
			toast.error('❌ Failed to upload preview image');
		}
	};

	return (
		<div className="space-y-6">
			<Card title="Upload SketchShaper Pro Files">
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium mb-2">Select Category *</label>
						<select
							value={selectedCategory}
							onChange={(e) => setSelectedCategory(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="">-- Select Category --</option>
							{categoriesData?.data?.map((cat) => (
								<option key={cat.id} value={cat.id}>
									{cat.name}
								</option>
							))}
						</select>
					</div>

					<Fileinput
						selectedFile={watch('preview_image')?.[0]}
						name={'preview_image'}
						preview={true}
						control={control}
						label="File Preview Image (Optional)"
					/>

					<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition">
						<input
							ref={fileInputRef}
							type="file"
							multiple
							onChange={handleFileSelect}
							className="hidden"
							id="file-input"
							accept=".skp,.zip,.png,.jpeg,.jpg"
						/>
						<label htmlFor="file-input" className="cursor-pointer">
							<div className="text-gray-600">
								<p className="text-lg font-medium">Drag & Drop Files Here</p>
								<p className="text-sm">or click to select files</p>
								<p className="text-xs text-gray-500 mt-2">
									Supported: .skp, .zip, .png, .jpeg, .jpg
								</p>
							</div>
						</label>
					</div>
				</div>
			</Card>

			{uploads.length > 0 && (
				<Card title="Upload Queue">
					<div className="space-y-4">
						{uploads.map((upload) => (
							<div
								key={upload.id}
								className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
							>
								<div className="flex items-start justify-between mb-3">
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-1">
											<p className="font-medium text-sm truncate">{upload.name}</p>
											<span
												className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(
													upload.status
												)}`}
											>
												{upload.status.toUpperCase()}
											</span>
										</div>
										<p className="text-xs text-gray-500">
											{formatBytes(upload.size)}
										</p>
									</div>
									<div className="text-right">
										<p className="text-sm font-medium">
											{upload.uploadedChunks}/{upload.totalChunks} chunks
										</p>
										<p className="text-xs text-gray-500">
											{upload.progress.toFixed(2)}%
										</p>
									</div>
								</div>

								<div className="w-full bg-gray-200 rounded-full h-2 mb-3">
									<div
										className="bg-blue-600 h-2 rounded-full transition-all duration-300"
										style={{ width: `${upload.progress}%` }}
									></div>
								</div>

								<div className="flex gap-2">
									{upload.status === 'uploading' && (
										<Button
											onClick={() => handlePause(upload.id)}
											text="Pause"
											className="btn-light btn-sm"
										/>
									)}
									{upload.status === 'paused' && (
										<Button
											onClick={() => handleResume(upload.id)}
											text="Resume"
											className="btn-dark btn-sm"
										/>
									)}
									{(upload.status === 'queued' ||
										upload.status === 'paused' ||
										upload.status === 'uploading') && (
										<Button
											onClick={() => handleCancel(upload.id)}
											text="Cancel"
											className="btn-light btn-sm"
										/>
									)}
									{(upload.status === 'completed' ||
										upload.status === 'failed' ||
										upload.status === 'cancelled') && (
										<Button
											onClick={() => handleRemove(upload.id)}
											text="Remove"
											className="btn-light btn-sm"
										/>
									)}
								</div>
							</div>
						))}
					</div>
				</Card>
			)}
		</div>
	);
};

export default SketchShaperProFileUpload;
