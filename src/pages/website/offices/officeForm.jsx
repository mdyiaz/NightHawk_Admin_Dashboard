import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import {
	useCreateOfficesMutation,
	useUpdateOfficesMutation,
} from '@/store/api/app/website/offices/officesApiSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OfficeForm = ({ id, data }) => {
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
	} = useSubmit(id, id ? useUpdateOfficesMutation : useCreateOfficesMutation);

	const handleFormSubmit = async (data) => {
		// Manipulate the data as needed
		await onSubmit({ ...data, created_admin_id: 1, updated_admin_id: 1 });
	};

	useEffect(() => {
		reset({
			name: data?.name,
			contact_number: data?.contact_number,
			email: data?.email,
			address: data?.address,
		});
	}, [data]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit Office' : 'Create New Office'}>
				<div className="grid grid-cols-1 gap-5">
					<Textinput
						register={register}
						label="Name"
						type="text"
						placeholder="Office Name"
						name="name"
						required={true}
						error={errors?.title}
					/>

					<Textinput
						register={register}
						label="Contact Number"
						type="text"
						placeholder="Office Contact Number"
						name="contact_number"
						required={true}
						error={errors?.contact_number}
					/>

					<Textinput
						register={register}
						label="Email"
						type="email"
						placeholder="Office Email"
						name="email"
						required={true}
						error={errors?.email}
					/>

					<Textarea
						name="address"
						register={register}
						label="Address"
						type="textarea"
						placeholder="Office Address"
						row={6}
						required={true}
						error={errors?.details}
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

export default OfficeForm;
