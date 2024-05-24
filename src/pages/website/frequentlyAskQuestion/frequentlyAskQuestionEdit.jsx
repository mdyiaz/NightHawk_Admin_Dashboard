import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import FrequentlyAskQuestionForm from './frequentlyAskQuestionForm';
import { useGetFrequentlyAskQuestionByIdQuery } from '@/store/api/app/website/frequentlyAskQuestion/frequentlyAskQuestionApiSlice';

const FrequentlyAskQuestionEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetFrequentlyAskQuestionByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<FrequentlyAskQuestionForm id={id} data={data?.data} />
		</>
	);
};

export default FrequentlyAskQuestionEdit;
