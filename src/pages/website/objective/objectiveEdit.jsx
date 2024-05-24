import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useGetObjectiveByIdQuery } from '@/store/api/app/website/objective/objectiveApiSlice';
import { useParams } from 'react-router-dom';
import ObjectiveForm from './objectiveForm';

const ObjectiveEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetObjectiveByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<ObjectiveForm id={id} data={data?.data} />
		</>
	);
};

export default ObjectiveEdit;
