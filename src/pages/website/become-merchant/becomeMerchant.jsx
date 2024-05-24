import Loading from '@/components/Loading';
import { useGetBecomeMerchantsQuery } from '@/store/api/app/website/become-merchant/becomeMerchantApiSlice';
import { useParams } from 'react-router-dom';
import BecomeMerchantForm from './becomeMerchantForm';
// import SliderForm from './sliderForm';

const BecomeMerchant = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetBecomeMerchantsQuery();

	console.log("data", data)

	if (isLoading || isFetching) return <Loading />;

	// if (!id) return <Error />;

	return (
		<>
			<BecomeMerchantForm data={data?.data} />
		</>
	);
};

export default BecomeMerchant;
