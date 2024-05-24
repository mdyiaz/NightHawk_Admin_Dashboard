import Loading from '@/components/Loading';
import { useParams } from 'react-router-dom';
import BecomeMerchantForm from './becomeFranchiseForm';
import { useGetBecomeFranchisesQuery } from '@/store/api/app/website/become-franchise/becomeFranchiseApiSlice';
// import SliderForm from './sliderForm';

const BecomeFranchise = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
	useGetBecomeFranchisesQuery();

	if (isLoading || isFetching) return <Loading />;

	// if (!id) return <Error />;

	return (
		<>
			<BecomeMerchantForm data={data?.data} />
		</>
	);
};

export default BecomeFranchise;
