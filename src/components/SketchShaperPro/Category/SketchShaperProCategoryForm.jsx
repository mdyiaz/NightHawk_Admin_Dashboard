import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import {
	useCreateSketchShaperProCategoryMutation,
	useUpdateSketchShaperProCategoryMutation,
} from '@/store/api/app/SketchShaperPro/sketchShaperProCategoryApiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextEditor from '@/components/shared/Select/TextEditor';

const SketchShaperProCategoryForm = ({ id, data }) => {
	const navigate = useNavigate();

	const {
		register,
		control,
		errors,
		reset,
		handleSubmit,
		onSubmit,
		watch,
		isLoading,
	} = useSubmit(
		id,
		id ? useUpdateSketchShaperProCategoryMutation : useCreateSketchShaperProCategoryMutation
	);

	const handleFormSubmit = async (formData) => {
		const submitFormData = new FormData();

		const keys = Object.keys(formData);

		keys.forEach((key) => {
			if (['preview_image'].includes(key)) {
				if (formData[key]) {
					submitFormData.append('preview_image', formData.preview_image[0]);
				} else {
					submitFormData.append('preview_image', formData.preview_image);
				}
			} else {
				submitFormData.append(key, formData[key]);
			}
		});

		await onSubmit(submitFormData);
	};

	useEffect(() => {
		reset({
			name: data?.name,
			meta_title: data?.meta_title,
			meta_description: data?.meta_description,
		});
	}, [data]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit SketchShaper Pro Category' : 'Create SketchShaper Pro Category'}>
				<div className="grid grid-cols-1 gap-5">
					<div>
						<label className="block text-sm font-medium mb-2">Category Name *</label>
						<input
							type="text"
							placeholder="Enter category name"
							{...register('name', { required: 'Category name is required' })}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						{errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
					</div>

					<Textinput
						register={register}
						label="Meta Title"
						type="text"
						placeholder="Meta Title"
						name="meta_title"
						required={false}
						error={errors?.meta_title}
					/>

					<div>
						<p className='mb-2 text-sm font-semibold'>Meta Description</p>
						<TextEditor
							name="meta_description"
							errors={errors}
							control={control}
							required={false}
						/>
					</div>

					<Fileinput
						selectedFile={watch('preview_image')?.[0]}
						name={'preview_image'}
						defaultUrl={data?.preview_image}
						preview={true}
						control={control}
						label="Category Preview Image"
					/>
				</div>

				<div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
					<Button
						onClick={() => navigate(-1)}
						text="Cancel"
						className="btn-light"
					/>
					<Button
						isLoading={isLoading}
						type="submit"
						text="Save"
						className="btn-dark"
					/>
				</div>
			</Card>
		</form>
	);
};

export default SketchShaperProCategoryForm;
