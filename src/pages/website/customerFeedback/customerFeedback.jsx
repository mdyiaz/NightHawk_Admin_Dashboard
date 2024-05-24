import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import envConfig from '@/configs/envConfig';
import useNoImage from '@/hooks/useNoImage';
import { useGetCustomerFeedbacksByPaginationQuery } from '@/store/api/app/website/customerFeedback/customerFeedbackApiSlice';
import { useState } from 'react';

const CustomerFeedback = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');
	const noImage = useNoImage()

	const { data, isLoading, isError, error, isFetching } =
	useGetCustomerFeedbacksByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	if (isLoading ) return <SkeletionTable />;

	const COLUMNS = [
		{
            Header: "Name",
            accessor: "name",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
		{
            Header: "Company",
            accessor: "company",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
		{
			Header: 'Image',
			accessor: 'image',
			Cell: (row) => (
				<img
					src={`${envConfig.apiUrl}${row?.cell?.value}`}
					alt="customerFeedback"
					className="h-20 w-auto object-cover rounded-lg"
					onError={(e) => {
                        e.target.onerror = null; // Prevents looping
                        e.target.src = noImage;
                    }}
				/>
			),
		},
		{
            Header: "Feedback",
            accessor: "feedback",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
	];

	return (
		<>
			<CustomPaginationTable
				title="Customer Feedbacks"
				COLUMNS={COLUMNS}
				data={data?.data}
				paginationPage={paginationPage}
				setPaginationPage={setPaginationPage}
				limit={limit}
				setLimit={setLimit}
				order={order}
				setOrder={setOrder}
				search={search}
				setSearch={setSearch}
			/>
		</>
	);
};

export default CustomerFeedback;
