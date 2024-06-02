import SelectCategory from '@/components/shared/Select/SelectCategory';
import TextEditor from '@/components/shared/Select/TextEditor';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useSubmit from '@/hooks/useSubmit';
import { useCreateApplicationSettingsMutation, useGetApplicationSettingsQuery } from '@/store/api/app/ApplicationSettings/applicationSettingsApiSlice';
import { useCreateGeneralAboutUsMutation, useGetGeneralAboutUsQuery } from '@/store/api/app/GeneralAbout/generalAboutApiSlice';
import { useCreateSubCategoryMutation, useUpdateSubCategoryMutation } from '@/store/api/app/SubCategory/subCategoryApiSlice';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ApplicationSettings = ({ id, }) => {
    const { isAuth, auth } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const { data: applicationSettings, } = useGetApplicationSettingsQuery()

    const data = applicationSettings?.data

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
    } = useSubmit(id, id ? useCreateApplicationSettingsMutation : useCreateApplicationSettingsMutation, false);

    const handleFormSubmit = async (data) => {

        await onSubmit(data);
    };



    useEffect(() => {
        reset({
            site_name: data?.site_name,
            site_description: data?.site_description,
            site_email: data?.site_email,
            site_phone: data?.site_phone,
            site_address: data?.site_address,

        });
    }, [data]);

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Card title={id ? 'Application Settings' : 'Application Settings'}>
                <div className="grid grid-cols-1 gap-5">
                    <Textinput
                        register={register}
                        label="Web Application Name"
                        type="text"
                        placeholder="Web Application Name"
                        name="site_name"
                        required={true}
                        error={errors?.site_name}
                    />



                    <Textarea
                        name="site_description"
                        register={register}
                        label="Application Description"
                        type="textarea"
                        placeholder=" short_description"
                        row={6}
                        required={true}
                        error={errors?.site_description}
                    />

                    <div>
                        <div className='mb-2'>
                            <label htmlFor="" className='text-sm'>Application Logo</label>
                        </div>
                        <Fileinput
                            selectedFile={watch('site_logo')?.[0]}
                            name={'site_logo'}
                            defaultUrl={data?.site_logo}
                            preview={true}
                            control={control}
                        />
                    </div>


                    <Textinput
                        register={register}
                        label="Email"
                        type="email"
                        placeholder="Email"
                        name="site_email"
                        required={true}
                        error={errors?.site_email}
                    />

                    <Textinput
                        register={register}
                        label="Phone"
                        type="number"
                        placeholder="Email"
                        name="site_phone"
                        required={true}
                        error={errors?.site_phone}
                    />


                    <Textinput
                        register={register}
                        label="Address"
                        type="text"
                        placeholder="Address"
                        name="site_address"
                        required={true}
                        error={errors?.site_address}
                    />



                    {/* <TextEditor
                        name="content"
                        errors={errors}
                        control={control}
                        required={false}
                    /> */}

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

export default ApplicationSettings;
