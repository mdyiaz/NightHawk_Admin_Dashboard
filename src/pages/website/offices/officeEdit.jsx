import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useGetOfficesByIdQuery } from '@/store/api/app/website/offices/officesApiSlice';
import { useParams } from 'react-router-dom';
import OfficeForm from './officeForm';

const OfficeEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetOfficesByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<OfficeForm id={id} data={data?.data} />
		</>
	);
};

export default OfficeEdit;
