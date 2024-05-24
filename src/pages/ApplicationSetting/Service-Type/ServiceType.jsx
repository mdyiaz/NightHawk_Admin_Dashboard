import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetServiceTypesByPaginationQuery } from '@/store/api/app/ApplicationSetting/ServiceTypeApiSlice';
import { useGetServiceAreasByPaginationQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import { useGetWeightTypesByPaginationQuery } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';
import { useGetOfficesByPaginationQuery } from '@/store/api/app/website/offices/officesApiSlice';
import { useState } from 'react';

const ServiceType = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetServiceTypesByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	console.log("service_area_id::", data?.data)

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
			Header: "Extra Charge",
			accessor: "rate",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},



	];

	return (
		<>
			<CustomPaginationTable
				title="Service Type"
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

export default ServiceType;
