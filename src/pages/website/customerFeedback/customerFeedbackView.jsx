import Loading from '@/components/Loading';
import { useGetCustomerFeedbackByIdQuery } from '@/store/api/app/website/customerFeedback/customerFeedbackApiSlice';
import { useParams } from 'react-router-dom';
import PageView from '@/components/shared/PageView/PageView';

const CustomerFeedbackView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetCustomerFeedbackByIdQuery(id);

	const items = [
		{
			status: "Status",
			value: data?.data?.status,
		},
		{
			title: "Customer Name ",
			value: data?.data?.name,

		},
		{
			title: "Company",
			value: data?.data?.company,

		},
		{
			title: "Long Details",
			value: data?.data?.feedback,

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
				<PageView items={items} title="View Customer Feedback" />
			</div>
		</>
	);
};

export default CustomerFeedbackView;
