import SkeletionTable from '@/components/skeleton/Table';
import { useGetAssetsByIdQuery } from '@/store/api/app/Assets/assetsApiSlice';
import React from 'react';
import { useParams } from 'react-router-dom';
import AssetsForm from './AssetsForm';

const AssetsEdit = () => {

    const {id} = useParams()

    const {data, isLoading} = useGetAssetsByIdQuery(id);

    if (isLoading) {
        return <SkeletionTable/>
    }


    return (
        <div>
            <AssetsForm id={id}   data={data?.data} />
        </div>
    );
};

export default AssetsEdit;