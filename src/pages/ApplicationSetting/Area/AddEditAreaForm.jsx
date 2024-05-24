import SelectDistrict from "@/components/shared/Select/SelectDistrict";
import useDarkmode from "@/hooks/useDarkMode";
import React, { useEffect, useState } from "react";

const AddEditAreaForm = ({
  register,
  errors,
  reset,
  setSelectedDesignation,
  update,
  district,
  singleArea,
  control
}) => {
  const [isDark] = useDarkmode();
  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    reset({
      ...singleArea,
    });
  }, [singleArea]);
  return (
    <div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Districts
        </label>
        {/* <select
          className="w-full text-sm outline-none h-10 px-2 border border-[rgb(226 232 240)]"
          onChange={(e) => {
            register("district_id", {
              value: e.target.value, // Set the selected value in the register
              required: "District is required",
            });
          }}
          defaultValue={singleArea?.district_id}
          value={singleArea?.district_id}
        >
          {!singleArea?.district_id && (<option value="">Select District </option>)}
          {district?.map((item) => (
            <option key={item.id} value={item.id}>{item?.name}</option>
          ))}
        </select> */}
        <SelectDistrict
          defaultValue={singleArea?.district_id}
          control={control}
          errors={errors}
        />


      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Name
        </label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="Area Name"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleArea?.name}
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
          Post Code
        </label>
        <input
          type="text"
          {...register("post_code")}
          placeholder="Area Post post_code"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleArea?.post_code}
        />
        {errors.post_code && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.post_code?.message}
          </p>
        )}
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

export default AddEditAreaForm;
