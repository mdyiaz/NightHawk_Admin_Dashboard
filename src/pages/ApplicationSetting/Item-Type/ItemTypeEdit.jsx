import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import ItemTypeForm from './ItemTypeForm';
import { useGetItemTypeByIdQuery } from '@/store/api/app/ApplicationSetting/itemTypeApiSlice';

const ItemTypeEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetItemTypeByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<ItemTypeForm id={id} data={data?.data} />
		</>
	);
};

export default ItemTypeEdit;
