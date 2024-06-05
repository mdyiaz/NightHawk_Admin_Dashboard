import React from 'react';
import SocialCreate from './SocialCreate';
import { useParams } from 'react-router-dom';
import { useGetSocialByIdQuery } from '@/store/api/app/Social/socialApiSlice';
import SkeletionTable from '@/components/skeleton/Table';

const SocialEdit = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetSocialByIdQuery(id)

    if (isLoading) {
        return <SkeletionTable/>
    }


    return (
        <div>
            <SocialCreate  data={data?.data}  id={id} />
        </div>
    );
};

export default SocialEdit;