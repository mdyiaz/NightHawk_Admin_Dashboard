import SelectHomeDelivery from "@/components/shared/Select/SelectHomeDelivery";
import SelectLockDownService from "@/components/shared/Select/SelectLockDownService";
import SelectServiceArea from "@/components/shared/Select/SelectServiceArea";
import useDarkmode from "@/hooks/useDarkMode";
import React, { useEffect, useState } from "react";

const AddEditDistrictsForm = ({
  register,
  errors,
  reset,
  update,
  singleDistrict,
  control
}) => {
  const [isDark] = useDarkmode();
  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    reset({
      ...singleDistrict,
    });
  }, [singleDistrict]);
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
          placeholder="Item Type title"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleDistrict?.name}
        />
        {errors.name && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.name?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Service Area
        </label>
        <SelectServiceArea
          defaultValue={singleDistrict?.service_area_id}
          control={control}
          errors={errors}
          name="service_area_id"
        />

      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Home Delivery
        </label>
        <SelectHomeDelivery defaultValue={singleDistrict?.home_delivery}
          control={control}
          errors={errors}
          name="home_delivery" />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Lock Down Service
        </label>
        <SelectLockDownService defaultValue={singleDistrict?.lock_down_service}
          control={control}
          errors={errors}
          name="lock_down_service" />
        {/* <select
          className="w-full text-sm outline-none h-10 px-2 border border-[rgb(226 232 240)]"
          onChange={(e) => {
            register("lock_down_service", {
              value: e.target.value, // Set the selected value in the register
              required: "Weight Type is required",
            });
          }}
          // value={singleDistrict?.lock_down_service}
          defaultValue={singleDistrict?.lock_down_service}
        >
          <option value="">Select Lock Down Delivery </option>
          <option value="0">No</option>
          <option value="1">Yes </option>
        </select>

        {errors.lock_service && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.lock_service?.message}
          </p>
        )} */}
      </div>

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

export default AddEditDistrictsForm;
