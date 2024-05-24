import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetVisitorMessagessByPaginationQuery } from '@/store/api/app/website/visitorMessages/visitorMessagesApiSlice';
import { useState } from 'react';

const VisitorMessages = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetVisitorMessagessByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	if (isLoading ) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: 'Name',
			accessor: 'name',
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
			Header: 'Subject',
			accessor: 'subject',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Message',
			accessor: 'message',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
	];

	return (
		<>
			<CustomPaginationTable
				title="VisitorMessagess"
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
				// defaultAction={false}
				addNew={false}
				isEdit={false}
			/>
		</>
	);
};

export default VisitorMessages;
