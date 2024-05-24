
import React from "react";

import Loading from '@/components/Loading';
import { useParams } from 'react-router-dom';
import PageView from "@/components/shared/PageView/PageView";
import { useGetWeightTypeByIdQuery } from "@/store/api/app/ApplicationSetting/weightPackagesApiSlice";

const WeightPackageView = () => {
    const { id } = useParams();

    const { data, isFetching, isLoading, isError, error } =
        useGetWeightTypeByIdQuery(id);

    console.log("data", data);
    const items = [
        {
            status: "Status",
            value: data?.data?.status,
        },
        {
            title: "ID ",
            value: data?.data?.wp_id,

        },
        {
            title: "Name",
            value: data?.data?.name,

        },
        {
            title: "Title",
            value: data?.data?.title,

        },
        {
            title: "Weight Type",
            value: data?.data?.weight_type === 1 ? "KG" : data?.data?.weight_type === 2 ? "CFT" : "",

        },

        {
            title: "Details ",
            value: data?.data?.details,

        },
        {
            title: "Rate",
            value: data?.data?.rate,

        },
    ];

    if (isLoading || isFetching) return <Loading />;
    return (
        <div>
            <PageView items={items} title="View Weight Package" />
        </div>
    );
};

export default WeightPackageView;
