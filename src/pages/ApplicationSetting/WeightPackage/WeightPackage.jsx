import Loading from '@/components/Loading';
import CustomTable from '@/components/shared/CustomTable/CustomTable';
import { useGetServiceAreasQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import React, { useEffect, useState } from 'react';
import Tooltip from "@/components/ui/Tooltip";
import { Link } from 'react-router-dom';
import { useGetWeightTypesByPaginationQuery, useGetWeightTypesQuery } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetSlidersByPaginationQuery } from '@/store/api/app/website/slider/sliderApiSlice';
import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';

const WeightPackage = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');

    const { data, isLoading, isError, error, isFetching } =
        useGetWeightTypesByPaginationQuery({
            page: paginationPage,
            limit: limit,
            order: order,
            search: search,
        });
    console.log(data)

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
            Header: "ID",
            accessor: "",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
        {
            Header: "Name",
            accessor: "name",
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

        // {
        //     Header: "status",
        //     accessor: "status",
        //     Cell: (row) => {
        //         return (
        //             <span className="block w-full">
        //                 <span
        //                     className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${(row?.cell?.value === 1 || row?.cell?.value === true)
        //                         ? "text-success-500 bg-success-500"
        //                         : ""
        //                         } 
        //           ${(row?.cell?.value === 0 || row?.cell?.value === false)
        //                             ? "text-danger-500 bg-danger-500"
        //                             : ""
        //                         }

        //            `}
        //                 >
        //                     {(row?.cell?.value === 1 || row?.cell?.value === true) ? "Active" : "InActive"}
        //                 </span>
        //             </span>
        //         );
        //     },
        // },
    ];
    return (
        <div>

            <CustomPaginationTable
                title="Weight Packages"
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
        </div>
    );
};

export default WeightPackage;