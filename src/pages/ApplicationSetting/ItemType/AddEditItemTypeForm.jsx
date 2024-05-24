import React, { useEffect, useState } from "react";
import SelectServiceType from "../ServiceType/SelectServiceType";
import SelectServiceArea from "@/components/shared/Select/SelectServiceArea";
import useDarkmode from "@/hooks/useDarkMode";

const AddEditItemTypeForm = ({
  register,
  errors,
  reset,
  setSelectedDesignation,
  update,
  singleItemType,
  name,
  defaultValue,
  control,
  options
}) => {
  const [isDark] = useDarkmode();
  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    reset({
      ...singleItemType,
    });
  }, [singleItemType]);
  return (
    <div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Name
        </label>
        <input
          type="text"
          {...register("title", {
            required: "Name is required",
          })}
          placeholder="Item Type title"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleItemType?.title}
        />
        {errors.title && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.title?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Rate
        </label>
        <input
          type="text"
          {...register("rate")}
          placeholder="Rate"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleItemType?.rate}
        />
        {errors.rate && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.rate?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Service Area
        </label>
        <SelectServiceArea
          defaultValue={singleItemType?.service_area_id}
          control={control}
          errors={errors}
          name="service_area_id"
        />
        {/* <Controller
          name={name}
          control={control}
          defaultValue={singleServiceType?.service_area_id}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <SelectCustom
              defaultValue={singleServiceType?.service_area_id}
              options={options}
              onChange={onChange}
            />
          )}
        // rules={{
        // 	required: required === false ? false : '3PL Type is required!',
        // }}
        // rules={{ required: false }}
        /> */}
        {/* <SelectServiceType control={control} defaultValue={singleItemType?.service_area_id} name="service_area_id" /> */}
      </div>
      {/* <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Service Area
        </label>
        <select
          className="w-full text-sm outline-none h-10 px-2 border border-[rgb(226 232 240)]"
          onChange={(e) => {
            setSelectedDesignation(e.target.value);
            register("service_area_id", {
              value: e.target.value, // Set the selected value in the register
              required: "Weight Type is required",
            });
          }}
          value={singleItemType?.service_area_id}
          defaultValue={singleItemType?.service_area_id}
        >
          <option value="">Select Service Area </option>
          <option value="1">Inside City </option>
          <option value="2">Sub City </option>
          <option value="3">Outside City </option>
        </select>

        {errors.service_area_id && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.service_area_id?.message}
          </p>
        )}
      </div> */}

      <div className="mt-4">
        <button
          type="submit"
          className="bg-[#28a745] text-white py-1 px-3 text-sm rounded-md"
        >
          {update ? "Update" : "Submit"}
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

export default AddEditItemTypeForm;
