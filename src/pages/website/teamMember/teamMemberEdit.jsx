import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useParams } from 'react-router-dom';
import TeamMemberForm from './teamMemberForm';
import { useGetTeamMemberByIdQuery } from '@/store/api/app/website/teamMember/teamMemberApiSlice';

const TeamMemberEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetTeamMemberByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<TeamMemberForm id={id} data={data?.data} />
		</>
	);
};

export default TeamMemberEdit;
