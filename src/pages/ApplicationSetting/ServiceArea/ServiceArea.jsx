import Loading from '@/components/Loading';
import CustomTable from '@/components/shared/CustomTable/CustomTable';
import { useGetServiceAreasByPaginationQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import React, { useEffect, useState } from 'react';
import Tooltip from "@/components/ui/Tooltip";
import { Link } from 'react-router-dom';
import SkeletionTable from '@/components/skeleton/Table';
import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';

const ServiceArea = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');

    const { data, isLoading, isError, error, isFetching } =
        useGetServiceAreasByPaginationQuery({
            page: paginationPage,
            limit: limit,
            order: order,
            search: search,
        });
    console.log(data)

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
            Header: "COD%",
            accessor: "cod_charge",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
        {
            Header: "Default Charge",
            accessor: "default_charge",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
        {
            Header: "Weight Type",
            accessor: "weight_type",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },



    ];
    return (
        <div>

            <CustomPaginationTable
                title="Service Areas List"
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
                isDelete={false}
            />
            {/* <CustomTable title={'Service Areas List'} COLUMNS={COLUMNS} data={data?.data} /> */}
        </div>
    );
};

export default ServiceArea;