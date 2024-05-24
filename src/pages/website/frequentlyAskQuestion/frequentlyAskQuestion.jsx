import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import envConfig from '@/configs/envConfig';
import { useGetFrequentlyAskQuestionsByPaginationQuery } from '@/store/api/app/website/frequentlyAskQuestion/frequentlyAskQuestionApiSlice';
import { useState } from 'react';

const FrequentlyAskQuestion = () => {
	const [paginationPage, setPaginationPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState('desc');
	const [search, setSearch] = useState('');

	const { data, isLoading, isError, error, isFetching } =
	useGetFrequentlyAskQuestionsByPaginationQuery({
			page: paginationPage,
			limit: limit,
			order: order,
			search: search,
		});

	if (isLoading ) return <SkeletionTable />;

	const COLUMNS = [
		{
            Header: "Question",
            accessor: "question",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
		{
            Header: "Answer",
            accessor: "answer",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
		
	];

	return (
		<>
			<CustomPaginationTable
				title="Frequently Ask Questions"
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

export default FrequentlyAskQuestion;
