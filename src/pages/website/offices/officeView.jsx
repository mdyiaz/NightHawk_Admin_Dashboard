import Loading from '@/components/Loading';
import { useGetSliderByIdQuery } from '@/store/api/app/website/slider/sliderApiSlice';
import { useParams } from 'react-router-dom';

const OfficeView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetSliderByIdQuery(id);

	if (isLoading || isFetching) return <Loading />;

	return <div>{/* Here the view code */}</div>;
};

export default OfficeView;
