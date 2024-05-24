import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useGetParcelStepByIdQuery } from '@/store/api/app/website/parcelStep/parcelStepApiSlice';
import { useParams } from 'react-router-dom';
import ParcelStepForm from './parcelStepForm';

const ParcelStepEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetParcelStepByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<ParcelStepForm id={id} data={data?.data} />
		</>
	);
};

export default ParcelStepEdit;
