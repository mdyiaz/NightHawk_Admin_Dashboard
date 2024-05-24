import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import WeightPackageForm from './WeightPackageForm';
import { useGetWeightTypeByIdQuery } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';

const WeightPackageEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetWeightTypeByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<WeightPackageForm id={id} data={data?.data} />
		</>
	);
};

export default WeightPackageEdit;
