import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetItemTypesByPaginationQuery } from '@/store/api/app/ApplicationSetting/itemTypeApiSlice';
import { useState } from 'react';

const ItemType = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetItemTypesByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	console.log("Item Type::", data?.data)

	if (isLoading) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: "Service Area",
			accessor: "service_area",
			Cell: (row) => {
				return <span>{row?.cell?.value?.name}</span>;
			},
		},

		{
			Header: "Title",
			accessor: "title",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: "Rate",
			accessor: "rate",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},



	];

	return (
		<>
			<CustomPaginationTable
				title="Item Type"
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

export default ItemType;
