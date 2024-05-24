import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import envConfig from '@/configs/envConfig';
import useNoImage from '@/hooks/useNoImage';
import { useGetServicesByPaginationQuery } from '@/store/api/app/website/service/serviceApiSlice';
import { useState } from 'react';

const Service = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');
	const noImage = useNoImage()

	const { data, isLoading, isError, error, isFetching } =
		useGetServicesByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	console.log("data service::", data?.data)

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
			Header: 'Image',
			accessor: 'image',
			Cell: (row) => (
				<img
					src={`${envConfig.apiUrl}${row?.cell?.value}`}
					alt="service"
					className="h-20 w-auto object-cover rounded-lg"
					onError={(e) => {
                        e.target.onerror = null; // Prevents looping
                        e.target.src = noImage;
                    }}
				/>
			),
		},
		{
			Header: "Short Details",
			accessor: "short_details",
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
	];

	return (
		<>
			<CustomPaginationTable
				title="Services"
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

export default Service;
