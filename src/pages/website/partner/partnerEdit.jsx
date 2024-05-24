import Loading from '@/components/Loading';
import Error from '@/pages/404';
import { useGetSliderByIdQuery } from '@/store/api/app/website/slider/sliderApiSlice';
import { useParams } from 'react-router-dom';
import PartnerForm from './partnerForm';
import { useGetPartnerByIdQuery } from '@/store/api/app/website/partner/partnerApiSlice';

const PartnerEdit = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetPartnerByIdQuery(id);

	if (isLoading ) return <Loading />;

	if (!id) return <Error />;

	return (
		<>
			<PartnerForm id={id} data={data?.data} />
		</>
	);
};

export default PartnerEdit;
