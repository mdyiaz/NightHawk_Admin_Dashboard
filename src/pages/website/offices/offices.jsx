import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import NotFound from '@/components/shared/NotFound/NotFound';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetOfficesByPaginationQuery } from '@/store/api/app/website/offices/officesApiSlice';
import { useState } from 'react';

const Offices = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetOfficesByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	if (isLoading) return <SkeletionTable />;

	// if (!data?.data?.result?.length) return <NotFound />

	const COLUMNS = [
		{
			Header: 'Name',
			accessor: 'name',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Contact Number',
			accessor: 'contact_number',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Email',
			accessor: 'email',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Address',
			accessor: 'address',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
	];

	return (
		<>
			<CustomPaginationTable
				title="Offices"
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
				isView={false}
			/>
		</>
	);
};

export default Offices;
