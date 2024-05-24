import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetServiceAreasByPaginationQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import { useGetWeightTypesByPaginationQuery } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';
import { useGetOfficesByPaginationQuery } from '@/store/api/app/website/offices/officesApiSlice';
import { useState } from 'react';

const WeightPackage = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
		useGetWeightTypesByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	console.log("Data::", data?.data)

	if (isLoading) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: 'ID',
			accessor: 'wp_id',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Name',
			accessor: 'name',
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
			Header: ' Rate',
			accessor: 'rate',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},


	
	];

	return (
		<>
			<CustomPaginationTable
				title="Weight Packages"
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

export default WeightPackage;
