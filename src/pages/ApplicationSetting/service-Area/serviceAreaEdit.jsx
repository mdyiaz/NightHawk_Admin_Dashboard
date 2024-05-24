import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import ServiceAreaForm from './serviceAreaForm';
import { useGetServiceAreaByIdQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';

const ServiceAreaEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetServiceAreaByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<ServiceAreaForm id={id} data={data?.data} />
		</>
	);
};

export default ServiceAreaEdit;
