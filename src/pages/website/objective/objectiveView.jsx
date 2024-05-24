import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetObjectiveByIdQuery } from '@/store/api/app/website/objective/objectiveApiSlice';
import { useParams } from 'react-router-dom';

const ObjectiveView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetObjectiveByIdQuery(id);

	const items = [
		{
			status: "Status",
			value: data?.data?.status,
		},
		{
			title: "Name ",
			value: data?.data?.name,

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
			image: "Icon",
			value: data?.data?.icon,

		}
	];

	if (isLoading || isFetching) return <Loading />;

	return (
		<>
			<div>
				<PageView items={items} title="View Objective" />
			</div>
		</>
	);
};

export default ObjectiveView;
