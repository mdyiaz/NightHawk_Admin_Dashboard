import SelectWeightPackage from "@/components/shared/Select/SelectWeightType";
import Select from "@/components/ui/Select";
import useDarkmode from "@/hooks/useDarkMode";
import React, { useEffect, useState } from "react";

const AddEditServiceAreaForm = ({
    register,
    errors,
    reset,
    singleServiceArea,
    update,
    optionWeightType,
    setWeightType,
    weightType,
    handleChange,
    options,
    control,
    isLoading,
}) => {
    const [isDark] = useDarkmode();
    const handleReset = () => {
        reset();
    };
    useEffect(() => {
        reset({
            ...singleServiceArea,
        });
    }, [singleServiceArea]);
    console.log(options)


    return (
        <div>
            <div className="flex flex-col mb-3">
                <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                    Name
                </label>
                <input
                    type="text"
                    {...register("name", {
                        required: "Name is required",
                    })}
                    placeholder="Service area name"
                    className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}                    defaultValue={singleServiceArea?.name}
                />
                {errors.name && (
                    <p className="text-red-500" role="alert">
                        {" "}
                        {errors.name?.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col mb-3">
                <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                    COD Charge %
                </label>
                <input
                    type="text"
                    {...register("cod_charge", {
                        required: "Cod is required",
                    })}
                    placeholder="COD Charge"
                    className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
                    defaultValue={singleServiceArea?.cod_charge}
                />
                {errors.cod && (
                    <p className="text-red-500" role="alert">
                        {" "}
                        {errors.cod?.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col mb-3">
                <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                    Default Charge
                </label>
                <input
                    type="text"
                    {...register("default_char", {
                        required: "Default Charge is required",
                    })}
                    placeholder="Default Charge"
                    className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
                    defaultValue={singleServiceArea?.default_charge}
                />
                {errors.default_charge && (
                    <p className="text-red-500" role="alert">
                        {" "}
                        {errors.default_char?.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col mb-3">
                <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                    Delivery Time
                </label>
                <input
                    type="text"
                    {...register("delivery_time", {
                        required: "delivery_time is required",
                    })}
                    placeholder="Delivery Time Ex: 24"
                    className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
                    defaultValue={singleServiceArea?.delivery_time}
                />
                {errors.delivery_time && (
                    <p className="text-red-500" role="alert">
                        {" "}
                        {errors.delivery_time?.message}
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                    Weight Type
                </label>
                <SelectWeightPackage
                    defaultValue={singleServiceArea?.weight_type}
                    control={control}
                    errors={errors}
                    name="weight_type"
                />
            </div>
            {/* <Select
                label="Weight Type"
                options={optionWeightType}
                onChange={handleChange}
                value={weightType}
                defaultValue={weightType}

                placeholder="Select Weight Package"
            /> */}
            {/* <div className="flex flex-col mb-3">
                <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                    Weight Type
                </label>
                <select
                    className="w-full text-sm outline-none h-10 px-2 border rounded-[5px] border-[rgb(226 232 240)]"
                    onChange={(e) => {
                        register("weight", {
                            value: e.target.value, // Set the selected value in the register
                            required: "Weight Type is required",
                        });
                    }}
                    defaultValue={singleServiceArea?.weight_type}
                    value={singleServiceArea?.weight_type}
                >
                    <option value="">Select Weight Type </option>
                    <option value="1">KG </option>
                    <option value="2">CFT </option>
                </select>

                {errors.weight && (
                    <p className="text-red-500" role="alert">
                        {" "}
                        {errors.weight?.message}
                    </p>
                )}
            </div> */}
            <div className="flex flex-col mb-3 mt-4">
                <label htmlFor="details" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                    Details
                </label>
                <textarea
                    name="details"
                    id="details"
                    cols="30"
                    rows="3"
                    placeholder="Service area details"
                    {...register("details", {
                        required: "Short Details is required",
                    })}
                    className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
                    defaultValue={singleServiceArea?.details}
                ></textarea>
                {errors.details && (
                    <p className="text-red-500" role="alert">
                        {" "}
                        {errors.details?.message}
                    </p>
                )}
            </div>

            <div className="mt-4">
                <button
                    type="submit"
                    className="bg-[#28a745] text-white py-1 px-3 text-sm rounded-md"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : update ? "Update" : "Submit"}
                </button>
                <button
                    onClick={handleReset}
                    className="bg-[#007bff] text-white py-1 px-3 text-sm rounded-md ml-3"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default AddEditServiceAreaForm;
