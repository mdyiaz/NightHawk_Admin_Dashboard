import Loading from '@/components/Loading';
import CustomTable from '@/components/shared/CustomTable/CustomTable';
import { useGetServiceAreasQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';
import React, { useEffect, useState } from 'react';
import Tooltip from "@/components/ui/Tooltip";
import { useGetServiceAreaSettingsByPaginationQuery, useGetServiceAreaSettingsQuery } from '@/store/api/app/ApplicationSetting/serviceAreaSettingApiSlice';
import CustomPaginationTable from '@/components/shared/CustomTable/CustomPaginationTable';
import SkeletionTable from '@/components/skeleton/Table';
import { useGetServiceAreaWeightPackageByPaginationQuery } from '@/store/api/app/ApplicationSetting/ServiceAreaWeightPackage/serviceAreaWeightPackageApiSlice';

const WeightCustomCharge = () => {

    const [paginationPage, setPaginationPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');


    const { data, isLoading, isError, error, isFetching } =
        useGetServiceAreaWeightPackageByPaginationQuery({
            page: paginationPage,
            limit: limit,
            order: order,
            search: search,
        });

    if (isLoading) return <SkeletionTable />;

    console.log("helloData", data?.data);

    // const [updateServiceArea, { isLoading: isUpdating }] = useUpdateServiceAreaMutation();

    // let updateStatus;
    // useEffect(() => {
    //     // Example of updating a service area's status
    //     updateStatus = async (id, status) => {
    //         try {
    //             await updateServiceArea({ id, status });
    //         } catch (error) {
    //             console.error('Error updating status:', error);
    //         }
    //     };

    //     // You can call updateStatus function with id and status when needed

    // }, [updateServiceArea]);

    if (isLoading) return <Loading />

    const COLUMNS = [
       
        {
            Header: "Service Area",
            accessor: "service_area",
            Cell: (row) => {
                return <span>{row?.cell?.value?.name}</span>;
            },
        },


        {
            Header: 'Weight Package',
            Cell: (row) => {

                return (
                    <div>

                        {
                            row?.cell?.row?.original?.service_area_weight_packages?.map((weight, index) => (
                                <div className='flex gap-2'>
                                    <p>({index + 1})</p>
                                    <p>
                                        {weight?.weight_package?.name}
                                    </p>

                                </div>
                            ))
                        }

                    </div>
                );
            },
        },


        {
            Header: ' Package Rate',
            Cell: (row) => {

                return (
                    <div>

                        {
                            row?.cell?.row?.original?.service_area_weight_packages?.map((weight, index) => (
                                <div className='flex gap-2'>
                                    <p>
                                        {weight?.rate}
                                    </p>

                                </div>
                            ))
                        }

                    </div>
                );
            },
        },

    ];
    return (
        <div>

            <CustomPaginationTable
                title="Weight Custom Charge List"
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

export default WeightCustomCharge;