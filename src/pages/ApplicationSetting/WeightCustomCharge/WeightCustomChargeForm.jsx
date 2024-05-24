import Loading from '@/components/Loading';
import SelectServiceArea from '@/components/shared/Select/SelectServiceArea';
import Button from '@/components/ui/Button';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import {
    useCreateServiceAreaWeightPackageMutation,
    useUpdateServiceAreaWeightPackageMutation,
} from '@/store/api/app/ApplicationSetting/ServiceAreaWeightPackage/serviceAreaWeightPackageApiSlice';
import { useGetWeightTypesQuery } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WeightCustomChargeForm = ({ id, data, title }) => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	console.log(' for edit ', data);

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
		id
			? useUpdateServiceAreaWeightPackageMutation
			: useCreateServiceAreaWeightPackageMutation
	);

	const { data: weightPackage, isLoading: weightPackageLoading } =
		useGetWeightTypesQuery();

	// State to track input fields individually
	const [inputEnabledMap, setInputEnabledMap] = useState({});
	// Function to toggle input field
	const toggleInput = (weightId) => {
		setInputEnabledMap((prevState) => ({
			...prevState,
			[weightId]: !prevState[weightId],
		}));
	};

	useEffect(() => {
		if (!data) return;

		reset({
			service_area_id: data?.service_area_id,
			rate: weightPackage?.data?.map((item) => ({
				id: item.id,
				rate:
					data?.service_area_weight_packages?.find(
						(weight) => parseInt(weight.weight_package_id) === parseInt(item.id)
					)?.rate || item.rate,
			})),
		});

		const enabledMap = {};

		weightPackage?.data?.forEach((weight) => {
			const weightPackage = data?.service_area_weight_packages?.find(
				(item) => parseInt(item.weight_package_id) === parseInt(weight.id)
			);

			enabledMap[weight.id] = !!weightPackage;
		});

		setInputEnabledMap(enabledMap);
	}, [data, weightPackage?.data]);

	console.log('wp', weightPackage);

	// const handleFormSubmit = async (data) => {

	//     data.service_area_id=service_area_id
	//     console.log("data", data);
	//     return
	//     await onSubmit(data);
	// };

	const handleFormSubmit = async (data) => {
		// Filter out the weight_package_id and rate based on inputEnabledMap
		const filteredWeightIds = Object.keys(inputEnabledMap).filter(
			(weightId) => inputEnabledMap[weightId]
		);
		const filteredData = {
			service_area_id: data.service_area_id,
			weight_package_id: filteredWeightIds.map((id) => ({ id })),
			rate: data.rate.filter(
				(rate, index) => inputEnabledMap[data.weight_package_id[index].id]
			),
		};

		// return;
		await onSubmit(filteredData);
	};

	if (weightPackageLoading) {
		return <Loading />;
	}

	return (
		<div>
			<p className="text-xl font-semibold">Weight Custom Charge </p>

			<div className="bg-green-300 py-2 px-2  mt-5">
				<p className="font-semibold">
					{title ? title : 'Create New Service Area Setting'}
				</p>
			</div>

			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<div className="mt-5">
					<p className="mb-2 px-2">Select Service Area</p>
					<SelectServiceArea
						control={control}
						errors={errors}
						name="service_area_id"
						defaultValue={data?.service_area_id}
					/>
				</div>

				<div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-4">
					{weightPackage?.data?.map((weight, index) => (
						<div key={weight.id} className="mt-5">
							<div className="flex gap-3 items-center justify-center">
								<div>
									<p className="font-semibold text-sm">{weight?.name}</p>
								</div>

								<div>
									<button
										type="button"
										onClick={() => toggleInput(weight.id)}
										className={`px-3 py-1 rounded ${
											inputEnabledMap[weight.id]
												? 'bg-green-500 text-white font-semibold text-sm'
												: 'bg-transparent text-green-500 border border-green-500'
										}`}
									>
										On
									</button>
									<button
										type="button"
										onClick={() => toggleInput(weight.id)}
										className={`px-3 py-1 rounded ${
											!inputEnabledMap[weight.id]
												? 'bg-red-500 text-white font-semibold text-sm'
												: 'bg-transparent text-red-500 border border-red-500'
										}`}
									>
										Off
									</button>
								</div>
							</div>

							<div className="mt-3">
								<input
									type="number"
									{...register(`weight_package_id.${index}.id`)}
									value={weight?.id}
									className="hidden"
								/>

								<Textinput
									register={register}
									type="number"
									placeholder="Add Taka"
									name={`rate.${index}.rate`}
									required={false}
									error={errors?.[`rate${weight.id}`]}
									disabled={!inputEnabledMap[weight.id]} // Disable based on state
									// defaultValue={
									// 	data?.service_area_weight_packages?.find(
									// 		(item) =>
									// 			parseInt(item.weight_package_id) === parseInt(weight.id)
									// 	)?.rate
									// }
								/>
							</div>
						</div>
					))}
				</div>

				<div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
					<Button
						onClick={() => navigate(-1)}
						text="Cancel"
						className="btn-light"
					/>
					<Button type="submit" text="Save" className="btn-dark" />
				</div>
			</form>
		</div>
	);
};

export default WeightCustomChargeForm;
