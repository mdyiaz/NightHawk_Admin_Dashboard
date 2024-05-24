import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import { useCreateFeatureMutation, useUpdateFeatureMutation } from '@/store/api/app/website/feature/featureApiSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FeatureForm = ({ id, data }) => {
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
	} = useSubmit(id, id ? useUpdateFeatureMutation : useCreateFeatureMutation);

	const handleFormSubmit = async (data) => {
		console.log("data",data);
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

		formData.append('created_admin_id', auth?.user?.user_info?.id);

		await onSubmit(formData);
	};

	useEffect(() => {
		reset({
			title: data?.title,
			heading: data?.heading,
			details: data?.details,
		});
	}, [data]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit Feature' : 'Create New Feature'}>
				<div className="grid grid-cols-1 gap-5">
					<Textinput
						register={register}
						label="Title"
						type="text"
						placeholder="Title"
						name="title"
						required={true}
						error={errors?.title}
					/>
					<Textinput
						register={register}
						label="Heading"
						type="text"
						placeholder="Heading"
						name="heading"
						required={true}
						error={errors?.heading}
					/>
				
					<Textarea
						name="details"
						register={register}
						label="Details"
						type="textarea"
						placeholder="Details"
						row={6}
						required={true}
						error={errors?.details}
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
					<Button type="submit" text="Save" className="btn-dark" />
				</div>
			</Card>
		</form>
	);
};

export default FeatureForm;
