import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetFeatureByIdQuery } from '@/store/api/app/website/feature/featureApiSlice';
import { useParams } from 'react-router-dom';

const FeatureView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetFeatureByIdQuery(id);

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
			title: "Heading",
			value: data?.data?.heading,

		},
		{
			title: "Details",
			value: data?.data?.details,

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
				<PageView items={items} title="View Feature" />
			</div>
		</>
	);;
};

export default FeatureView;
