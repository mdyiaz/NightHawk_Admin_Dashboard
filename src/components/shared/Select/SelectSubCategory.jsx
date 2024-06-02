import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetCategoriesQuery } from '@/store/api/app/Category/categoryApiSlice';
import { useGetSubCategoriesQuery } from '@/store/api/app/SubCategory/subCategoryApiSlice';

const SelectSubCategory = ({
    errors,
    control,
    setState,
    setItem,
    state,
    defaultValue,
    isMarked,
    isDisabled,
    name,
    
}) => {


    const { data, isLoading } = useGetSubCategoriesQuery()

    const options = data?.data?.map((item) => ({
        value: item._id,
        label: item.name,
    }));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Controller
                name={name || 'sub_category'}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectCustom
                        isMarked={isMarked}
                        defaultValue={defaultValue}
                        options={options}
                        onChange={onChange}
                        setState={setState}
                        setItem={setItem}
                        isDisabled={isDisabled}
                    />
                )}
                rules={{ required: 'Sub Category is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'sub_category']} />
        </>
    );
};

export default SelectSubCategory;
