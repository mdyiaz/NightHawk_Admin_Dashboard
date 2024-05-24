import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import DistrictForm from './DistrictForm';
import { useGetDistrictByIdQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';

const DistrictEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetDistrictByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<DistrictForm id={id} data={data?.data} />
		</>
	);
};

export default DistrictEdit;
