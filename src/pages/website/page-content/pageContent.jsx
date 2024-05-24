import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import envConfig from '@/configs/envConfig';
import useNoImage from '@/hooks/useNoImage';
import { useGetPageContentsByPaginationQuery } from '@/store/api/app/website/pageContent/pageContentApiSlice';
import { useState } from 'react';

const PageContent = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');
	const noImage = useNoImage()

	const { data, isLoading, isError, error, isFetching } =
		useGetPageContentsByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	if (isLoading) return <SkeletionTable />;

	const COLUMNS = [
		{
			Header: 'Type',
			accessor: 'page_type',
			Cell: (row) => {
				const pageType = row?.cell?.value;
				let pageTypeText = '';

				if (pageType === 1) {
					pageTypeText = 'About Page';
				} else if (pageType === 2) {
					pageTypeText = 'Service Page';
				} else if (pageType === 3) {
					pageTypeText = 'Merchant Registration Page';
				} else if (pageType === 4) {
					pageTypeText = 'Privacy Policy Page';
				}

				return <span>{pageTypeText}</span>;
			},
		},

		{
			Header: 'Image',
			accessor: 'image',
			Cell: (row) => (
				<img
					src={`${envConfig.apiUrl}${row?.cell?.value}`}
					alt="page content"
					className="h-20 w-auto object-cover rounded-lg"
					onError={(e) => {
                        e.target.onerror = null; // Prevents looping
                        e.target.src = noImage;
                    }}
				/>
			),
		},
		{
			Header: 'Short Details',
			accessor: 'short_details',
			Cell: (row) => {
				return <span>{row?.cell?.value}</span>;
			},
		},
	];

	return (
		<>
			<CustomPaginationTable
				title="Page Contents"
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

export default PageContent;
