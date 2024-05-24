import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import FeatureForm from './featureForm';
import { useGetFeatureByIdQuery } from '@/store/api/app/website/feature/featureApiSlice';

const FeatureEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetFeatureByIdQuery(id);
   console.log("object",id);
	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<FeatureForm id={id} data={data?.data} />
		</>
	);
};

export default FeatureEdit;
