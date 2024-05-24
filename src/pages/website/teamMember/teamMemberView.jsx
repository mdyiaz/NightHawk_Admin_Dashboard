import Loading from '@/components/Loading';
import { useGetTeamMemberByIdQuery } from '@/store/api/app/website/teamMember/teamMemberApiSlice';
import { useParams } from 'react-router-dom';
import PageView from '@/components/shared/PageView/PageView';

const TeamMemberView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetTeamMemberByIdQuery(id);

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
			title: "Designation",
			value: data?.data?.designation?.name,

		},
		{
			title: "Message",
			value: data?.data?.message,

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
				<PageView items={items} title="View Team Member" />
			</div>
		</>
	);
};

export default TeamMemberView;
