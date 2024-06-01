import SelectCategory from '@/components/shared/Select/SelectCategory';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import { useCreateFooterPageMutation, useUpdateFooterPageMutation } from '@/store/api/app/FooterPage/footerPageApiSlice';
import { useCreateSubCategoryMutation, useUpdateSubCategoryMutation } from '@/store/api/app/SubCategory/subCategoryApiSlice';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FooterPageForm = ({ id, data }) => {
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
    } = useSubmit(id, id ? useUpdateFooterPageMutation : useCreateFooterPageMutation);

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
            <Card title={id ? 'Edit Footer Page' : 'Create New Footer Page'}>
                <div className="grid grid-cols-1 gap-5">
                    <Textinput
                        register={register}
                        label="Slug"
                        type="text"
                        placeholder="Slug"
                        name="slug"
                        required={true}
                        error={errors?.name}
                    />

                    <Textarea
                        name="short_description"
                        register={register}
                        label="Short Description"
                        type="textarea"
                        placeholder="Sub-Category short_description"
                        row={6}
                        required={true}
                        error={errors?.short_description}
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

export default FooterPageForm;
