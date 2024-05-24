import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import BlogForm from './blogForm';
import { useGetBlogByIdQuery } from '@/store/api/app/website/blog/blogApiSlice';

const BlogEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetBlogByIdQuery(id);
	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<BlogForm id={id} data={data?.data} />
		</>
	);
};

export default BlogEdit;
