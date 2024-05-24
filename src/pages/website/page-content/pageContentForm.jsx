import CustomReactSelect from '@/components/shared/Select/CustomReactSelect';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textarea from '@/components/ui/Textarea';
import useSubmit from '@/hooks/useSubmit';
import {
	useCreatePageContentMutation,
	useUpdatePageContentMutation,
} from '@/store/api/app/website/pageContent/pageContentApiSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PageContentForm = ({ id, data }) => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const navigate = useNavigate();

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
		id ? useUpdatePageContentMutation : useCreatePageContentMutation
	);

	const handleFormSubmit = async (data) => {
		// Manipulate the data as needed
		const formData = new FormData();

		const keys = Object.keys(data);

		keys.forEach((key) => {
			if (['image'].includes(key)) {
				if (data[key]) {
					formData.append('image', data.image[0]);
				} else {
					formData.append('image', data.image);
				}
			} else {
				formData.append(key, data[key]);
			}
		});

		id
			? formData.append('updated_admin_id', auth?.user?.user_info?.id)
			: formData.append('created_admin_id', auth?.user?.user_info?.id);

		await onSubmit(formData);
	};

	useEffect(() => {
		reset({
			title: data?.title,
			page_type: data?.page_type,
			short_details: data?.short_details,
			long_details: data?.long_details,
		});
	}, [data]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit Page Content' : 'Create New Page Content'}>
				<div className="grid grid-cols-1 gap-5">
					<CustomReactSelect
						name="page_type"
						label="Page Type"
						placeholder="Select Page Type"
						control={control}
						error={errors?.page_type}
						required={true}
						options={[
							{ value: 1, label: 'About Page' },
							{ value: 2, label: 'Service Page' },
							{ value: 3, label: 'Merchant Registration Page' },
							{ value: 4, label: 'Privacy Policy Page' },
						]}
					/>

					<Textarea
						name="short_details"
						register={register}
						label="Short Details"
						type="textarea"
						placeholder="Page Content Short Details"
						row={6}
						required={true}
						error={errors?.short_details}
					/>

					<Textarea
						name="long_details"
						register={register}
						label="Long Details"
						type="textarea"
						placeholder="Page Content Long Details"
						row={6}
						required={true}
						error={errors?.long_details}
					/>

					<Fileinput
						selectedFile={watch('image')?.[0]}
						name={'image'}
						defaultUrl={data?.image}
						preview={true}
						control={control}
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

export default PageContentForm;
