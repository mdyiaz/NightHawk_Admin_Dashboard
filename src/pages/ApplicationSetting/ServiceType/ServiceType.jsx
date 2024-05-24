import Loading from '@/components/Loading';
import CustomTable from '@/components/shared/CustomTable/CustomTable';
import { useGetServiceAreasQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import React, { useEffect, useState } from 'react';
import Tooltip from "@/components/ui/Tooltip";
import { useGetServiceAreaSettingsQuery } from '@/store/api/app/ApplicationSetting/serviceAreaSettingApiSlice';
import { useGetServiceTypesByPaginationQuery, useGetServiceTypesQuery } from '@/store/api/app/ApplicationSetting/ServiceTypeApiSlice';
import SkeletionTable from '@/components/skeleton/Table';
import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';

const ServiceType = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');

    const { data, isLoading, isError, error, isFetching } = useGetServiceTypesByPaginationQuery({
        page: paginationPage,
        limit: limit,
        order: order,
        search: search,
    });
    console.log("helloData", data);

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
            Header: "Extra Charge",
            accessor: "rate",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },



    ];
    return (
        <div>
            <CustomPaginationTable
                title="Service Type"
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
                isDelete={false}
            />
        </div>
    );
};

export default ServiceType;