import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import AreaForm from './AreaForm';
import { useGetDistrictByIdQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import { useGetAreaByIdQuery } from '@/store/api/app/ApplicationSetting/Area/areaApiSlice';

const AreaEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetAreaByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<AreaForm id={id} data={data?.data} />
		</>
	);
};

export default AreaEdit;
