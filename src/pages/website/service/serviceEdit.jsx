import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import ServiceForm from './serviceForm';
import { useGetServiceByIdQuery } from '@/store/api/app/website/service/serviceApiSlice';

const ServiceEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetServiceByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<ServiceForm id={id} data={data?.data} />
		</>
	);
};

export default ServiceEdit;
