import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetAreasByPaginationQuery } from '@/store/api/app/ApplicationSetting/Area/areaApiSlice';
import React, { useState } from 'react';

const Area = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const [limit, setLimit] = useState(50);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');

    const { data, isLoading, isFetching } = useGetAreasByPaginationQuery({
        page: paginationPage,
        limit: limit,
        order: order,
        search: search,
    });

    if (isLoading) return <SkeletionTable />
    console.log("data: ", data)
    if (!data?.data?.result?.length) {
        return <h1 className="text-2xl font-bold">No Parcel Found</h1>
    }

    const COLUMNS = [

        {
            Header: "Area",
            accessor: "name",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },

        {
            Header: "Post Code",
            accessor: "post_code",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },

        {
            Header: "District",
            accessor: "district.name",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },


    ];


    return (
        <div>
            <CustomPaginationTable
                title='Area List'
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

        </div>
    );
};
export default Area;