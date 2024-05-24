// import SelectCustom from "@/components/shared/SelectCustom/SelectCustom";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import SelectServiceType from "./SelectServiceType";
import SelectServiceArea from "@/components/shared/Select/SelectServiceArea";
import useDarkmode from "@/hooks/useDarkMode";

const AddEditServiceTypeForm = ({
  register,
  errors,
  reset,
  setSelectedDesignation,
  singleServiceType,
  update,
  name,
  defaultValue,
  control,
  options
}) => {
  const [isDark] = useDarkmode();
  const handleReset = () => {
    reset();
  };

  console.log(singleServiceType)
  return (
    <div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Service Type Title
        </label>
        <input
          type="text"
          {...register("title", {
            required: "Name is required",
          })}
          placeholder="Weight Package name"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleServiceType?.title}
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
          Extra Charge
        </label>
        <input
          type="text"
          {...register("rate")}
          placeholder="Default Charge"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleServiceType?.rate}
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
          defaultValue={singleServiceType?.service_area_id}
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
        {/* <SelectServiceType control={control} defaultValue={singleServiceType?.service_area_id} name="service_area_id" /> */}
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
          value={singleServiceType?.service_area_id}
          defaultValue={singleServiceType?.service_area_id}
        >
          <option value="">Select Service Area </option>
          <option value="1">Inside City </option>
          <option value="2">Sub City </option>
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

export default AddEditServiceTypeForm;
