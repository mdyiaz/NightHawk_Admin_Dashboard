import Loading from '@/components/Loading';
import PageView from '@/components/shared/PageView/PageView';
import { useGetPartnerByIdQuery } from '@/store/api/app/website/partner/partnerApiSlice';
import { useParams } from 'react-router-dom';

const PartnerView = () => {
	const { id } = useParams();

	const { data, isFetching, isLoading, isError, error } =
		useGetPartnerByIdQuery(id);

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
			title: "Url",
			value: data?.data?.url,

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
				<PageView items={items} title="View Partner" />
			</div>
		</>
	);
};

export default PartnerView;
