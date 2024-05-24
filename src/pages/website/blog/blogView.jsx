import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetBlogByIdQuery } from '@/store/api/app/website/blog/blogApiSlice';
import { useGetFeatureByIdQuery } from '@/store/api/app/website/feature/featureApiSlice';
import { useParams } from 'react-router-dom';

const BlogView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetBlogByIdQuery(id);

	const items = [
		{
			status: "Status",
			value: data?.data?.status,
		},
		{
			title: "Title ",
			value: data?.data?.title,

		},
		{
			title: "Short Details",
			value: data?.data?.short_details,

		},
		{
			long_details: "Long Details",
			value: data?.data?.long_details,

		},
		{
			image: "Image",
			value: data?.data?.image,

		},
		{
			title: "Date",
			value: data?.data?.date,

		}
	];

	if (isLoading || isFetching) return <Loading />;

	return (
		<>
			<div>
				<PageView items={items} title="View Blog" />
			</div>
		</>
	);
};

export default BlogView;
