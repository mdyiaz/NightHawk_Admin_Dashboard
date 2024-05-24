import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditServiceTypeForm from "./AddEditServiceTypeForm";
import { toast } from "react-toastify";
import addContent from "@/hooks/addContent";
import useDarkmode from "@/hooks/useDarkMode";

const AddServiceType = () => {
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



  const handleSliderSubmit = async (data) => {
    console.log(data);
    try {
      // Create a new FormData object

      const newData = {
        title: data.title,
        service_area_id: data.service_area_id,
        rate: data.rate,
      };

      const accessToken = auth.accessToken;

      await addContent(newData, "service-type", reset, setIsLoading, accessToken)

    } catch (error) {
      console.error("Error creating slider:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">
          Create New Service Type
        </h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditServiceTypeForm
              register={register}
              errors={errors}
              reset={reset}
              name="service_area_id"
              control={control}
              options={options}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServiceType;
