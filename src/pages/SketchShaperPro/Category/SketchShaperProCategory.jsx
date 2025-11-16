import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import envConfig from '@/configs/envConfig';
import useNoImage from '@/hooks/useNoImage';
import { useGetSketchShaperProCategoriesByPaginationQuery } from '@/store/api/app/SketchShaperPro/sketchShaperProCategoryApiSlice';
import { useState, useMemo } from 'react';

const SketchShaperProCategory = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const noImage = useNoImage();

	const { data, isLoading, isError, error, isFetching } =
		useGetSketchShaperProCategoriesByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
		});

	const COLUMNS = useMemo(() => [
		{
			Header: 'Category Name',
			accessor: 'name',
		},
		{
			Header: 'Meta Title',
			accessor: 'meta_title',
		},
		{
			Header: 'Meta Description',
			accessor: 'meta_description',
		},
		{
			Header: 'Preview Image',
			accessor: 'preview_image',
			Cell: (row) => (
				<img
					src={`${envConfig.apiImgUrl}${row?.cell?.value}`}
					alt="preview"
					className="h-20 w-auto object-cover rounded-lg"
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = noImage;
					}}
				/>
			),
		},
		{
			Header: 'Files Count',
			accessor: 'files',
			Cell: (row) => row?.cell?.value?.length || 0,
		},
	], [noImage]);

	if (isLoading) return <SkeletionTable />;

	return (
		<>
			<CustomPaginationTable
				title="SketchShaper Pro Categories"
				COLUMNS={COLUMNS}
				data={data?.data}
				paginationPage={paginationPage}
				setPaginationPage={setPaginationPage}
				limit={limit}
				setLimit={setLimit}
				order={order}
				setOrder={setOrder}
				defaultStatus={false}
				isView={false}
			/>
		</>
	);
};

export default SketchShaperProCategory;
