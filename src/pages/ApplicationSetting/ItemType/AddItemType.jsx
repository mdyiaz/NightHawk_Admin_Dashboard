import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditItemTypeForm from "./AddEditItemTypeForm";
import { toast } from "react-toastify";
import addContent from "@/hooks/addContent";
import useDarkmode from "@/hooks/useDarkMode";

const AddItemType = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark] = useDarkmode();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    control
  } = useForm();

  const handleSliderSubmit = async (data) => {
    console.log(data);

    try {
      // Create a new FormData object

      const newData = {
        title: data.title,
        rate: data.rate,
        service_area_id: data.service_area_id,
      };

      const accessToken = auth.accessToken;

      // Make the POST request
      await addContent(newData, "item-type", reset, setIsLoading, accessToken)
    } catch (error) {
      console.error("Error creating slider:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">
          Create New Item Type
        </h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditItemTypeForm
              register={register}
              errors={errors}
              reset={reset}
              name="service_area_id"
              control={control}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemType;
