import Loading from '@/components/Loading';
import CustomTable from '@/components/shared/CustomTable/CustomTable';
import { useGetServiceAreasQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import React, { useEffect, useState } from 'react';
import Tooltip from "@/components/ui/Tooltip";
import { useGetItemTypesByPaginationQuery, useGetItemTypesQuery } from '@/store/api/app/ApplicationSetting/itemTypeApiSlice';
import SkeletionTable from '@/components/skeleton/Table';
import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';

const ItemType = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');

    const { data, isLoading, isError, error, isFetching } = useGetItemTypesByPaginationQuery({
        page: paginationPage,
        limit: limit,
        order: order,
        search: search,
    });
    console.log("helloData", data);
    // const [updateServiceArea, { isLoading: isUpdating }] = useUpdateServiceAreaMutation();

    if (isLoading) return <SkeletionTable />;

    const COLUMNS = [
        // {
        //     Header: "SL",
        //     accessor: (row, index) => index + 1,
        //     Cell: (row) => {
        //         return <span>{row.value}</span>;
        //     },
        // },
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
            Header: "Rate",
            accessor: "rate",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },



    ];
    return (
        <div>
            <CustomPaginationTable
                title="Item Type"
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

export default ItemType;