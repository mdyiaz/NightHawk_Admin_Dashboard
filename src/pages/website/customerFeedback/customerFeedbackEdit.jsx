import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import CustomerFeedbackForm from './customerFeedbackForm';
import { useGetCustomerFeedbackByIdQuery } from '@/store/api/app/website/customerFeedback/customerFeedbackApiSlice';

const CustomerFeedbackEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetCustomerFeedbackByIdQuery(id);
   console.log("object",id);
	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<CustomerFeedbackForm id={id} data={data?.data} />
		</>
	);
};

export default CustomerFeedbackEdit;
