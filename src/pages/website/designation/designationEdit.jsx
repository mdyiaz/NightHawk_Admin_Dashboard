import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import DesignationForm from './designationForm';
import { useGetDesignationByIdQuery } from '@/store/api/app/website/designation/designationApiSlice';

const DesignationEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetDesignationByIdQuery(id);
   console.log("object",id);
	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<DesignationForm id={id} data={data?.data} />
		</>
	);
};

export default DesignationEdit;
