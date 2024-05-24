import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import {
	useCreateServiceMutation,
	useUpdateServiceMutation,
} from '@/store/api/app/website/service/serviceApiSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ServiceForm = ({ id, data }) => {
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
	} = useSubmit(id, id ? useUpdateServiceMutation : useCreateServiceMutation);

	const handleFormSubmit = async (data) => {
		// Manipulate the data as needed
		const formData = new FormData();

		console.log("data", data)
		return;

		const keys = Object.keys(data);

		keys.forEach((key) => {
			if (['image'].includes(key)) {
				if (data[key]) {
					formData.append('image', data.image[0]);
				} else {
					formData.append('image', data.image);
				}
			}
			else if (['icon'].includes(key)) {
				if (data[key]) {
					formData.append('icon', data.icon[0]);
				} else {
					formData.append('icon', data.icon);
				}
			}
			else {
				formData.append(key, data[key]);
			}

		});

		formData.append('created_admin_id', auth?.user?.user_info?.id);
		console.log('formData', formData);

		await onSubmit(formData);
	};



	useEffect(() => {
		reset({
			name: data?.name,
			short_details: data?.short_details,
			long_details: data?.long_details,
		});
	}, [data]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit Service' : 'Create New Service'}>
				<div className="grid grid-cols-1 gap-5">
					<Textinput
						register={register}
						label="Name"
						type="text"
						placeholder="Service Name"
						name="name"
						required={true}
						error={errors?.name}
					/>

					<Textarea
						name="short_details"
						register={register}
						label="Short Details"
						type="textarea"
						placeholder="Service Short Details"
						row={6}
						required={true}
						error={errors?.short_details}
					/>

					<Textarea
						name="long_details"
						register={register}
						label="Long Details"
						type="textarea"
						placeholder="Service Long Details"
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
					<Fileinput
						selectedFile={watch('icon')?.[0]}
						name={'icon'}
						defaultUrl={data?.icon}
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

export default ServiceForm;
