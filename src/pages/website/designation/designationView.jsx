import Loading from '@/components/Loading';
import { useGetDesignationByIdQuery } from '@/store/api/app/website/designation/designationApiSlice';
import { useParams } from 'react-router-dom';

const DesignationView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetDesignationByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	return <div>{/* Here the view code */}</div>;
};

export default DesignationView;
