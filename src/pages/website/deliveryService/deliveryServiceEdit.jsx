import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import DeliveryServiceForm from './deliveryServiceForm';
import { useGetDeliveryServiceByIdQuery } from '@/store/api/app/website/deliveryService/deliveryServiceApiSlice';

const DeliveryServiceEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetDeliveryServiceByIdQuery(id);
   console.log("object",id);
	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<DeliveryServiceForm id={id} data={data?.data} />
		</>
	);
};

export default DeliveryServiceEdit;
