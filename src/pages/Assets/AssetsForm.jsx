import SelectSubCategory from '@/components/shared/Select/SelectSubCategory';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import {
    useCreateAssetsMutation,
    useUpdateAssetsMutation,
} from '@/store/api/app/Assets/assetsApiSlice';

import { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AssetsForm = ({ id, data }) => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	console.log('will be update', data);

	const {
		register,
		unregister,
		control,
		errors,
		reset,
		handleSubmit,
		onSubmit,
		watch,
		isLoading,
	} = useSubmit(
		id,
		id ? useUpdateAssetsMutation : useCreateAssetsMutation,
		false
	);

	const { append, remove, fields } = useFieldArray({
		control,
		name: 'images',
	});

	const handleFormSubmit = async (data) => {
		console.log('data', data);

		const formData = new FormData();

		const keys = Object.keys(data);

		keys.forEach((key) => {
			if (['cover'].includes(key)) {
				if (data[key]) {
					formData.append(key, data[key][0]);
				}
			} else if (key === 'images') {
				data[key].forEach((image) => {
					console.log('image', image.image);
					if (image.image?.[0]) {
						formData.append('images', image.image[0]);
					}
				});
			} else {
				formData.append(key, data[key]);
			}
		});

		await onSubmit(formData);
	};

	useEffect(() => {
		reset({
			name: data?.name,
			size: data?.size,
			resolution: data?.resolution,
			short_description: data?.short_description,
			sub_category: data?.sub_category?._id,
			images: data?.images || [
				{
					id: 1,
					image: null,
				},
			],
		});
	}, [data]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit Assets' : 'Create New Assets'}>
				<div className="grid grid-cols-1 gap-5">
					<Textinput
						register={register}
						label="Name"
						type="text"
						placeholder="Sub-Category Name"
						name="name"
						required={true}
						error={errors?.name}
					/>

					<div>
						<label htmlFor="" className="text-sm">
							Select Sub Category
						</label>
						<div className="mt-3">
							<SelectSubCategory
								control={control}
								errors={errors}
								defaultValue={data?.sub_category?._id}
							/>
						</div>
					</div>

					<Textinput
						register={register}
						label="Size"
						type="text"
						placeholder="Size"
						name="size"
						required={true}
						error={errors?.size}
					/>

					<Textinput
						register={register}
						label="Resolution"
						type="text"
						placeholder="Resolution"
						name="resolution"
						required={true}
						error={errors?.resolution}
					/>

					<Fileinput
						selectedFile={watch('cover')?.[0]}
						name={'cover'}
						label="Cover Image"
						defaultUrl={data?.cover}
						preview={true}
						control={control}
					/>

					<div>
						{fields.map((item, index) => (
							<Fileinput
								selectedFile={
									typeof watch(`images.${index}.image`)?.[0] !== 'string'
										? watch(`images.${index}.image`)?.[0]
										: null
								}
								name={`images[${index}].image`}
								label={`Asset Image ${index + 1}`}
								defaultUrl={data?.images?.[index]?.image}
								preview={true}
								control={control}
								classLabel={'mt-2'}
							/>
						))}
						<div className="text-center mt-3 flex gap-3 justify-center">
							<Button
								text="Remove Last Image"
								className={`btn-danger ${
									data?.images?.length >= fields.length ? 'hidden' : ''
								}`}
								onClick={() => remove(fields.length - 1)}
							/>

							<Button
								text="Add More Image"
								className="btn-dark"
								onClick={() => append({ id: fields.length + 1, image: null })}
							/>
						</div>
					</div>
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

export default AssetsForm;
