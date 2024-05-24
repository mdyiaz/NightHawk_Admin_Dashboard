import CustomReactSelect from '@/components/shared/Select/CustomReactSelect';
import SelectHomeDelivery from '@/components/shared/Select/SelectHomeDelivery';
import SelectLockDownService from '@/components/shared/Select/SelectLockDownService';
import SelectServiceArea from '@/components/shared/Select/SelectServiceArea';
import SelectWeightPackage from '@/components/shared/Select/SelectWeightType';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import { useCreateDistrictMutation, useUpdateDistrictMutation } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
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

const DistrictForm = ({ id, data }) => {
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
	} = useSubmit(id, id ? useUpdateDistrictMutation : useCreateDistrictMutation);

	const handleFormSubmit = async (data) => {
		// Manipulate the data as needed
		// console.log("data->", data)
		// return;

		await onSubmit({ ...data, created_admin_id: 1, updated_admin_id: 1 });
	};


	useEffect(() => {
		reset({
			service_area: data?.service_area,
			name: data?.name,
			service_area_id: data?.service_area_id,
			home_delivery: data?.home_delivery,
			lock_down_service: data?.lock_down_service,
		});

	}, [data]);
	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Card title={id ? 'Edit District' : 'Create New District'}>
				<div className="grid grid-cols-1 gap-5">


					<Textinput
						register={register}
						label="Name"
						type="text"
						placeholder="District Name"
						name="name"
						required={true}
						error={errors?.name}
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

					<div className="flex flex-col mb-3">
						<label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
							Home Delivery
						</label>
						<SelectHomeDelivery
							defaultValue={data?.home_delivery}
							control={control}
							errors={errors}
							name="home_delivery" />
					</div>

					<div className="flex flex-col mb-3">
						<label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
							Lock Down Service
						</label>
						<SelectLockDownService defaultValue={data?.lock_down_service}
							control={control}
							errors={errors}
							name="lock_down_service" />

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

export default DistrictForm;

