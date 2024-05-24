import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetServiceAreasByPaginationQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import { useGetOfficesByPaginationQuery } from '@/store/api/app/website/offices/officesApiSlice';
import { useState } from 'react';

const ServiceArea = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetServiceAreasByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	console.log("Data::", data?.data)

	if (isLoading) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: 'Name',
			accessor: 'name',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: ' COD %',
			accessor: 'cod_charge',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},

		{
			Header: 'Weight Type',
			accessor: 'weight_type',
			Cell: (row) => {
				const weightType = row?.cell?.value;
				let weightTypeText = '';

				if (weightType === 1) {
					weightTypeText = 'KG';
				} else if (weightType === 2) {
					weightTypeText = 'CFT ';
				}

				return <span>{weightTypeText}</span>;
			},
		},

		{
			Header: 'Default Charge',
			accessor: 'default_charge',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
	];

	return (
		<>
			<CustomPaginationTable
				title="Service Area"
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
				isDelete={true}
			/>
		</>
	);
};

export default ServiceArea;
