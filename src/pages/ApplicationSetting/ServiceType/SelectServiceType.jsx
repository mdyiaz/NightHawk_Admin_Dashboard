// import SelectCustom from '@/components/shared/SelectCustom/SelectCustom';
import { Controller } from 'react-hook-form';
// import Error from '../form/Error';

const SelectServiceType = ({
    defaultValue,
    register,
    errors,
    control,
    setState,
    required,
    name,
}) => {
    const options = [
        {
            id: 1,
            value: '1',
            label: 'Inside City',
        },
        {
            id: 2,
            value: '2',
            label: 'Sub City',
        },
        {
            id: 3,
            value: '3',
            label: 'Outside City',
        },
    ];

    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
            // render={({ field: { onChange, onBlur, value, ref } }) => (
            //     <SelectCustom
            //         defaultValue={defaultValue}
            //         options={options}
            //         onChange={onChange}
            //         setState={setState}
            //     />
            // )}
            // rules={{
            //     required: required === false ? false : '3PL Type is required!',
            // }}
            // rules={{ required: false }}
            />
            {/* <Error errorName={errors?.[name]} /> */}
        </>
    );
};

export default SelectServiceType;
