import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import envConfig from '@/configs/envConfig';
import useNoImage from '@/hooks/useNoImage';
import { useGetTeamMembersByPaginationQuery } from '@/store/api/app/website/teamMember/teamMemberApiSlice';
import { useState } from 'react';

const TeamMember = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');
    const noImage = useNoImage()

    const { data, isLoading, isError, error, isFetching } =
        useGetTeamMembersByPaginationQuery({
            page: paginationPage,
            limit: limit,
            order: order,
            search: search,
        });

    if (isLoading ) return <SkeletionTable />;

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
                    alt="feature"
                    className="h-20 w-auto object-cover rounded-lg"
                    onError={(e) => {
                        e.target.onerror = null; // Prevents looping
                        e.target.src = noImage;
                    }}
                />
            ),
        },
        {
            Header: "Designation",
            accessor: "designation.name",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
    ];

    return (
        <>
            <CustomPaginationTable
                title="Team Member"
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

export default TeamMember;
