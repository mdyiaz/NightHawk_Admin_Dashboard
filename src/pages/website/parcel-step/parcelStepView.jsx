import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetParcelStepByIdQuery } from '@/store/api/app/website/parcelStep/parcelStepApiSlice';
import { useParams } from 'react-router-dom';

const ParcelStepView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetParcelStepByIdQuery(id);
	console.log("data", data?.data?.long_details);

	const items = [
		{
			status: "Status",
			value: data?.data?.status,
		},
		{
			title: "Title",
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

		}
	];

	if (isLoading || isFetching) return <Loading />;

	return (
		<>
			<div>
				<PageView items={items} title="View Parcel Step" />
			</div>
		</>
	);
};

export default ParcelStepView;
