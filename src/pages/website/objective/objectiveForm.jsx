import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import {
	useCreateObjectiveMutation,
	useUpdateObjectiveMutation,
} from '@/store/api/app/website/objective/objectiveApiSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ObjectiveForm = ({ id, data }) => {
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
	} = useSubmit(
		id,
		id ? useUpdateObjectiveMutation : useCreateObjectiveMutation
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
			<Card title={id ? 'Edit Objective' : 'Create New Objective'}>
				<div className="grid grid-cols-1 gap-5">
					<Textinput
						register={register}
						label="Name"
						type="text"
						placeholder="Objective Name"
						name="name"
						required={true}
						error={errors?.title}
					/>

					<Textarea
						name="short_details"
						register={register}
						label="Short Details"
						type="textarea"
						placeholder="Objective Short Details"
						row={6}
						required={true}
						error={errors?.details}
					/>

					<Textarea
						name="long_details"
						register={register}
						label="Long Details"
						type="textarea"
						placeholder="Objective Long Details"
						row={6}
						required={true}
						error={errors?.details}
					/>

					<Fileinput
						selectedFile={watch('image')?.[0]}
						name={'image'}
						preview={true}
						control={control}
						defaultUrl={data?.image}
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

export default ObjectiveForm;
