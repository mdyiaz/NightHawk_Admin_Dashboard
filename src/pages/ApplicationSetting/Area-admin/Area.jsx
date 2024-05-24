import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetAreasByPaginationQuery } from '@/store/api/app/ApplicationSetting/Area/areaApiSlice';
import { useState } from 'react';

const Area = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetAreasByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	console.log("District ::", data?.data)

	if (isLoading) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: "Area",
			accessor: "name",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},

		{
			Header: "Post Code",
			accessor: "post_code",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},

		{
			Header: "District",
			accessor: "district.name",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},





	];

	return (
		<>
			<CustomPaginationTable
				title="Areas"
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

export default Area;
