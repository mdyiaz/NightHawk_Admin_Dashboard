


import React from "react";

import Loading from '@/components/Loading';
import { useParams } from 'react-router-dom';
import PageView from "@/components/shared/PageView/PageView";
import { useGetServiceAreaByIdQuery } from "@/store/api/app/ApplicationSetting/serviceAreaApiSlice";

const ViewServiceArea = () => {
    const { id } = useParams();

    const { data, isFetching, isLoading, isError, error } =
        useGetServiceAreaByIdQuery(id);

    console.log("data", data);
    const items = [
        {
            status: "Status",
            value: data?.data?.status,
        },
        {
            title: "Name ",
            value: data?.data?.name,

        },
        {
            title: "COD %",
            value: data?.data?.cod_charge,

        },
        {
            title: "Default Charge",
            value: data?.data?.default_charge,

        },
        {
            title: "Delivery Time",
            value: data?.data?.delivery_time,

        },
        {
            title: "Weight Type",
            value: data?.data?.weight_type,

        },
        {
            title: "Details ",
            value: data?.data?.details,

        },
    ];

    if (isLoading || isFetching) return <Loading />;
    return (
        <div>
            <PageView items={items} title="View Service Area" />
        </div>
    );
};

export default ViewServiceArea;
