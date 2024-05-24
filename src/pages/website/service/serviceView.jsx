import Loading from '@/components/Loading';
import { useGetServiceByIdQuery } from '@/store/api/app/website/service/serviceApiSlice';
import { useParams } from 'react-router-dom';

const ServiceView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetServiceByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	return <div>{/* Here the view code */}</div>;
};

export default ServiceView;
