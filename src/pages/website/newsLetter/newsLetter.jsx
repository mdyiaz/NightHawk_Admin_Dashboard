import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetNewsLettersByPaginationQuery } from '@/store/api/app/website/newsLetter/newsLetterApiSlice';
import { useState } from 'react';

const NewsLetter = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetNewsLettersByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	if (isLoading ) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: 'Email',
			accessor: 'email',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
	];

	return (
		<>
			<CustomPaginationTable
				title="NewsLetters"
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
				defaultAction={false}
				addNew={false}
			/>
		</>
	);
};

export default NewsLetter;
