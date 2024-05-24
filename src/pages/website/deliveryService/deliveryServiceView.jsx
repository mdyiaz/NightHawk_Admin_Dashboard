import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetDeliveryServiceByIdQuery } from '@/store/api/app/website/deliveryService/deliveryServiceApiSlice';
import { useParams } from 'react-router-dom';

const DeliveryServiceView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetDeliveryServiceByIdQuery(id);

	const items = [
		{
			status: "Status",
			value: data?.data?.status,
		},
		{
			title: "Name",
			value: data?.data?.name,

		},
		{
			title: "Short Details",
			value: data?.data?.short_details,

		},
		{
			long_details: "Long Details",
			value: data?.data?.long_details,

		},
		{
			image: "Image",
			value: data?.data?.image,

		},
		{
			image: "Icon",
			value: data?.data?.icon,

		}
	];

	if (isLoading || isFetching) return <Loading />;

	return (
		<div>
			<PageView items={items} title="Delivery Service View" />
		</div>
	);
};

export default DeliveryServiceView;
