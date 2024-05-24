import Loading from '@/components/Loading';
import { useGetFrequentlyAskQuestionByIdQuery } from '@/store/api/app/website/frequentlyAskQuestion/frequentlyAskQuestionApiSlice';
import { useParams } from 'react-router-dom';
import PageView from '@/components/shared/PageView/PageView';

const FrequentlyAskQuestionView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetFrequentlyAskQuestionByIdQuery(id);

	const items = [
		{
			status: "Status",
			value: data?.data?.status,
		},
		{
			title: "Question ",
			value: data?.data?.question,

		},
		{
			title: "Answer",
			value: data?.data?.answer,

		}
	];

	if (isLoading || isFetching) return <Loading />;

	return (
		<>
			<div>
				<PageView items={items} title="View Frequently Ask Question" />
			</div>
		</>
	);
};

export default FrequentlyAskQuestionView;
