import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetDistrictsByPaginationQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import { useGetItemTypesByPaginationQuery } from '@/store/api/app/ApplicationSetting/itemTypeApiSlice';
import { useState } from 'react';

const District = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetDistrictsByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});


	if (isLoading) return <SkeletionTable />
	console.log("data:::::: ", data)
	if (!data?.data?.result?.length) {
		return <h1 className="text-2xl font-bold">No Data Found</h1>
	}

	if (isLoading) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: "Name",
			accessor: "name",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},

		{
			Header: "Service Area",
			accessor: "service_area.name",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},

		{
			Header: "Home Delivery",
			accessor: "home_delivery",
			Cell: (row) => {
				const homeDeliveryValue = row?.cell?.value;
				return (
					<span>
						{homeDeliveryValue === 0 ? "No" : "Yes"}
					</span>
				);
			},
		},

		{
			Header: "Lock Down Service",
			accessor: "lock_down_service",
			Cell: (row) => {
				const homeDeliveryValue = row?.cell?.value;
				return (
					<span>
						{homeDeliveryValue === 0 ? "No" : "Yes"}
					</span>
				);
			},
		},




	];

	return (
		<>
			<CustomPaginationTable
				title="Districts"
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

export default District;
