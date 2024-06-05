import SelectCategory from '@/components/shared/Select/SelectCategory';
import SelectSubCategory from '@/components/shared/Select/SelectSubCategory';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import { useCreateAssetsMutation, useUpdateAssetsMutation } from '@/store/api/app/Assets/assetsApiSlice';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AssetsForm = ({ id, data }) => {
    const { isAuth, auth } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    console.log("will be update", data);

    const {
        register,
        unregister,
        control,
        errors,
        reset,
        handleSubmit,
        onSubmit,
        watch,
        isLoading,
    } = useSubmit(id, id ? useUpdateAssetsMutation : useCreateAssetsMutation);

    const handleFormSubmit = async (data) => {

        await onSubmit(data);
    };

    useEffect(() => {
        reset({
            name: data?.name,
            short_description: data?.short_description,
            category: data?.category
        });
    }, [data]);

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Card title={id ? 'Edit Assets' : 'Create New Assets'}>
                <div className="grid grid-cols-1 gap-5">
                    <Textinput
                        register={register}
                        label="Name"
                        type="text"
                        placeholder="Sub-Category Name"
                        name="name"
                        required={true}
                        error={errors?.name}
                    />


                    <div>
                        <label htmlFor="" className='text-sm'>Select Sub Category</label>
                        <div className='mt-3'>
                            <SelectSubCategory
                                control={control}
                                errors={errors}
                                defaultValue={data?.sub_category}
                            />
                        </div>
                    </div>

                    <Textinput
                        register={register}
                        label="Size"
                        type="text"
                        placeholder="Size"
                        name="size"
                        required={true}
                        error={errors?.size}
                    />


                    <Textinput
                        register={register}
                        label="Resolution"
                        type="text"
                        placeholder="Resolution"
                        name="resolution"
                        required={true}
                        error={errors?.resolution}
                    />

                    <Fileinput
                        selectedFile={watch('cover')?.[0]}
                        name={'cover'}
                        defaultUrl={data?.cover}
                        preview={true}
                        control={control}
                    />
                </div>

                <div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
                    <Button
                        onClick={() => navigate(-1)}
                        text="Cancel"
                        className="btn-light"
                    />
                    <Button
                        isLoading={isLoading}
                        type="submit"
                        text="Save"
                        className="btn-dark"
                    />
                </div>
            </Card>
        </form>
    );
};

export default AssetsForm;