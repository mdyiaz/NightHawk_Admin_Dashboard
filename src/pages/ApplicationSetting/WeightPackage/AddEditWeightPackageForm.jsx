import SelectWeightPackage from "@/components/shared/Select/SelectWeightType";
import Select from "@/components/ui/Select";
import useDarkmode from "@/hooks/useDarkMode";
import React, { useEffect, useState } from "react";

const AddEditWeightPackageForm = ({
  register,
  errors,
  reset,
  singleWeightPackage,
  update,
  optionWeightType,
  weightType,
  handleChange,
  options,
  control
}) => {
  const [isDark] = useDarkmode();
  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    reset({
      ...singleWeightPackage,
    });
  }, [singleWeightPackage]);
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
          placeholder="Weight Package name"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleWeightPackage?.name}
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
          Title
        </label>
        <input
          type="text"
          {...register("title", {
            required: "Weight Package Title is required",
          })}
          placeholder="Weight Package Title"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleWeightPackage?.title}
        />
        {errors.title && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.title?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Weight Type
        </label>
        <SelectWeightPackage
          defaultValue={singleWeightPackage?.weight_type}
          control={control}
          errors={errors}
          name="weight_type"
        />
      </div>


      {/* <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Weight Type
        </label>
        <select
          className="w-full text-sm outline-none h-10 px-2 border border-[rgb(226 232 240)]"
          onChange={(e) => {
            setWeightType(e.target.value);
            register("weight_type", {
              value: e.target.value, // Set the selected value in the register
              required: "Weight Type is required",
            });
          }}
          value={singleWeightPackage?.weight_type}
          defaultValue={singleWeightPackage?.weight_type}
        >
          <option value="">Select Weight Type </option>
          <option value="1">KG </option>
          <option value="2">CFT </option>
        </select>

        {errors.weight_type && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.weight_type?.message}
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
          placeholder="Weight Package Details"
          {...register("details", {
            required: "Short Details is required",
          })}
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleWeightPackage?.details}
        ></textarea>
        {errors.details && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.details?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-[15px] text-[rgb(71 85 105)] mb-2">
          Rate
        </label>
        <input
          type="text"
          {...register("rate", {
            required: "Weight Package Rate is required",
          })}
          placeholder="Default Charge"
          className={`border border-[rgb(226 232 240)] px-2 py-1 rounded-md ${isDark ? 'text-white bg-gray-900' : 'bg-white'}`}
          defaultValue={singleWeightPackage?.rate}
        />
        {errors.rate && (
          <p className="text-red-500" role="alert">
            {" "}
            {errors.rate?.message}
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

export default AddEditWeightPackageForm;
