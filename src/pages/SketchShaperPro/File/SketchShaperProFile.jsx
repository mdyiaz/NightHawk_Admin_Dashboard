import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import envConfig from '@/configs/envConfig';
import useNoImage from '@/hooks/useNoImage';
import { useGetSketchShaperProFilesQuery } from '@/store/api/app/SketchShaperPro/sketchShaperProFileApiSlice';
import { useState, useMemo } from 'react';

const SketchShaperProFile = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const noImage = useNoImage();

	const { data, isLoading, isError, error, isFetching } =
		useGetSketchShaperProFilesQuery({
			page: paginationPage,
			limit: limit,
			order: order,
		});

	const COLUMNS = useMemo(() => [
		{
			Header: 'File Name',
			accessor: 'name',
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
			Header: 'File Type',
			accessor: 'file_type',
		},
		{
			Header: 'Size',
			accessor: 'size',
		},
		{
			Header: 'Status',
			accessor: 'upload_status',
			Cell: (row) => (
				<span
					className={`px-3 py-1 rounded-full text-xs font-medium ${
						row?.cell?.value === 'completed'
							? 'bg-green-100 text-green-800'
							: row?.cell?.value === 'uploading'
							? 'bg-blue-100 text-blue-800'
							: 'bg-gray-100 text-gray-800'
					}`}
				>
					{row?.cell?.value}
				</span>
			),
		},
		{
			Header: 'Category',
			accessor: 'sketchshaper_pro_category.name',
		},
	], [noImage]);

	if (isLoading) return <SkeletionTable />;

	return (
		<>
			<CustomPaginationTable
				title="SketchShaper Pro Files"
				COLUMNS={COLUMNS}
				data={data?.data}
				paginationPage={paginationPage}
				setPaginationPage={setPaginationPage}
				limit={limit}
				setLimit={setLimit}
				order={order}
				setOrder={setOrder}
				defaultStatus={false}
			/>
		</>
	);
};

export default SketchShaperProFile;
