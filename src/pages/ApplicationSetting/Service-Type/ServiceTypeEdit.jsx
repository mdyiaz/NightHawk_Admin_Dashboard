import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import ServiceTypeForm from './ServiceTypeForm';
import { useGetServiceTypeByIdQuery } from '@/store/api/app/ApplicationSetting/ServiceTypeApiSlice';

const ServiceTypeEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetServiceTypeByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<ServiceTypeForm id={id} data={data?.data} />
		</>
	);
};

export default ServiceTypeEdit;
