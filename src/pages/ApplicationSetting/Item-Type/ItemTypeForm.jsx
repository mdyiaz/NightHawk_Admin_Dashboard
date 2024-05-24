import CustomReactSelect from '@/components/shared/Select/CustomReactSelect';
import SelectServiceArea from '@/components/shared/Select/SelectServiceArea';
import SelectWeightPackage from '@/components/shared/Select/SelectWeightType';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import { useCreateServiceTypeMutation, useUpdateServiceTypeMutation } from '@/store/api/app/ApplicationSetting/ServiceTypeApiSlice';
import { useCreateItemTypeMutation, useUpdateItemTypeMutation } from '@/store/api/app/ApplicationSetting/itemTypeApiSlice';
import { useCreateServiceAreaMutation, useGetServiceAreaByIdQuery, useUpdateServiceAreaMutation } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import { useCreateWeightTypeMutation, useUpdateWeightTypeMutation } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';
import {
	useCreateOfficesMutation,
	useUpdateOfficesMutation,
} from '@/store/api/app/website/offices/officesApiSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const ItemTypeForm = ({ id, data }) => {
	console.log("id", id)
	// const { id } = useParams();
	const navigate = useNavigate();
	const { isAuth, auth } = useSelector((state) => state.auth);
	const [weightType, setWeightType] = useState(null);

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
	} = useSubmit(id, id ? useUpdateItemTypeMutation : useCreateItemTypeMutation);


	const handleFormSubmit = async (data) => {
		// Manipulate the data as needed
		await onSubmit({ ...data, created_admin_id: 1, updated_admin_id: 1 });
	};


	useEffect(() => {
		reset({
			service_area: data?.service_area,
			title: data?.title,
			rate: data?.rate,
			details: data?.details,
			service_area_id: data?.service_area_id,
		});

	}, [data]);
	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit Item Type' : 'Create New Item Area'}>
				<div className="grid grid-cols-1 gap-5">


					<Textinput
						register={register}
						label="Title"
						type="text"
						placeholder="Item Type title"
						name="title"
						required={true}
						error={errors?.title}
					/>

					<Textinput
						register={register}
						label="Rate"
						type="text"
						placeholder="Rate "
						name="rate"
						required={true}
						error={errors?.rate}
					/>

					<div>
						<label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
							Service Area
						</label>
						{/* <SelectWeightPackage
							defaultValue={data?.weight_type}
							control={control}
							errors={errors}
							name="weight_type"
						/> */}
						<SelectServiceArea
							defaultValue={data?.service_area_id}
							control={control}
							errors={errors}
							name="service_area_id"
						/>
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

export default ItemTypeForm;


// import CustomReactSelect from '@/components/shared/Select/CustomReactSelect';
// import Button from '@/components/ui/Button';
// import Card from '@/components/ui/Card';
// import Fileinput from '@/components/ui/Fileinput';
// import Textarea from '@/components/ui/Textarea';
// import Textinput from '@/components/ui/Textinput';
// import useSubmit from '@/hooks/useSubmit';
// import { useCreateServiceAreaMutation, useUpdateServiceAreaMutation } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
// import {
// 	useCreatePageContentMutation,
// 	useUpdatePageContentMutation,
// } from '@/store/api/app/website/pageContent/pageContentApiSlice';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const ServiceAreaForm = ({ id, data }) => {
// 	const { isAuth, auth } = useSelector((state) => state.auth);
// 	const navigate = useNavigate();

// 	const {
// 		register,
// 		unregister,
// 		control,
// 		errors,
// 		reset,
// 		handleSubmit,
// 		onSubmit,
// 		watch,
// 		isLoading,
// 	} = useSubmit(
// 		id,
// 		id ? useUpdateServiceAreaMutation : useCreateServiceAreaMutation
// 	);

// 	const handleFormSubmit = async (data) => {
// 		// Manipulate the data as needed
// 		const formData = new FormData();

// 		const keys = Object.keys(data);

// 		keys.forEach((key) => {
// 			if (['image'].includes(key)) {
// 				if (data[key]) {
// 					formData.append('image', data.image[0]);
// 				} else {
// 					formData.append('image', data.image);
// 				}
// 			} else {
// 				formData.append(key, data[key]);
// 			}
// 		});

// 		id
// 			? formData.append('updated_admin_id', auth?.user?.user_info?.id)
// 			: formData.append('created_admin_id', auth?.user?.user_info?.id);

// 		await onSubmit(formData);
// 	};

// 	useEffect(() => {
// 		reset({
// 			name: data?.name,
// 			cod_charge: data?.cod_charge,
// 			weight_type: data?.weight_type,
// 			default_charge: data?.default_charge,
// 			details: data?.details,
// 		});
// 	}, [data]);

// 	return (
// 		<form onSubmit={handleSubmit(handleFormSubmit)}>
// 			<Card title={id ? 'Edit Page Content' : 'Create New Page Content'}>
// 				<div className="grid grid-cols-1 gap-5">
// 					<Textinput
// 						register={register}
// 						label="Name"
// 						type="text"
// 						placeholder="Service Area Name"
// 						name="name"
// 						required={true}
// 						error={errors?.name}
// 					/>

// 					<Textinput
// 						register={register}
// 						label="COD Charge %"
// 						type="text"
// 						placeholder="Cod Charge"
// 						name="cod_charge"
// 						required={true}
// 						error={errors?.cod_charge}
// 					/>

// 					<Textinput
// 						register={register}
// 						label="Default Charge"
// 						type="text"
// 						placeholder="Default Charge"
// 						name="default_charge"
// 						required={true}
// 						error={errors?.default_charge}
// 					/>

// 					<Textinput
// 						name="delivery_time"
// 						register={register}
// 						label="Delivery Time"
// 						type="date"
// 						placeholder="Delivery Time"
// 						required={false}
// 						error={errors?.delivery_time}
// 					/>

// 					<CustomReactSelect
// 						name="Weight Type"
// 						label="Weight Type"
// 						placeholder="Select Weight Type"
// 						control={control}
// 						error={errors?.weight_type}
// 						required={true}
// 						options={[
// 							{ value: 1, label: 'KG' },
// 							{ value: 2, label: 'CFT' },

// 						]}
// 					/>


// 					<Textarea
// 						name="details"
// 						register={register}
// 						label="Details"
// 						type="textarea"
// 						placeholder="Details "
// 						row={3}
// 						required={false}
// 						error={errors?.details}
// 					/>


// 				</div>

// 				<div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
// 					<Button
// 						onClick={() => navigate(-1)}
// 						text="Cancel"
// 						className="btn-light"
// 					/>
// 					<Button
// 						isLoading={isLoading}
// 						type="submit"
// 						text="Save"
// 						className="btn-dark"
// 					/>
// 				</div>
// 			</Card>
// 		</form>
// 	);
// };

// export default ServiceAreaForm;
