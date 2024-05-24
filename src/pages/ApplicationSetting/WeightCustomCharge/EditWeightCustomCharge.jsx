import React from 'react';
import WeightCustomChargeForm from './WeightCustomChargeForm';
import { useParams } from 'react-router-dom';
import { useGetServiceAreaWeightPackageByIdQuery } from '@/store/api/app/ApplicationSetting/ServiceAreaWeightPackage/serviceAreaWeightPackageApiSlice';
import Loading from '@/components/Loading';

const EditWeightCustomCharge = () => {

    const { id } = useParams();

    const {data, isLoading} = useGetServiceAreaWeightPackageByIdQuery(id)

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <WeightCustomChargeForm id={id}  title={'Edit Weight Custom Charge'} data={data?.data} />
        </div>
    );
};

export default EditWeightCustomCharge;