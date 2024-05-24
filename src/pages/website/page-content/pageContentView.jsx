import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetPageContentByIdQuery } from '@/store/api/app/website/pageContent/pageContentApiSlice';
import { useParams } from 'react-router-dom';

const PageContentView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetPageContentByIdQuery(id);
	console.log("data", data?.data);

	const items = [
		{
			status: "Status",
			value: data?.data?.status,
		},
		{
			title: "Page Type ",
			value: data?.data?.page_type === 1 ? 'About Page' : data?.data?.page_type === 2 ? 'Service Page' : data?.data?.page_type === 3 ? 'Merchant Registration Page' : data?.data?.page_type === 4 ? 'Privacy Policy Page' : '',

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

		}
	];

	if (isLoading || isFetching) return <Loading />;

	return (
		<>
			<div>
				<PageView items={items} title="View Page Content" />
			</div>
		</>
	);
};

export default PageContentView;
