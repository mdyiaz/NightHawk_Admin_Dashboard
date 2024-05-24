import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useGetPageContentByIdQuery } from '@/store/api/app/website/pageContent/pageContentApiSlice';
import { useParams } from 'react-router-dom';
import PageContentForm from './pageContentForm';

const PageContentEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetPageContentByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<PageContentForm id={id} data={data?.data} />
		</>
	);
};

export default PageContentEdit;
