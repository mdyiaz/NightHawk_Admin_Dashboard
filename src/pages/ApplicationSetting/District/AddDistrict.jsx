import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditDistrictsForm from "./AddEditDistrictsForm";
import { toast } from "react-toastify";
import addContent from "@/hooks/addContent";
import { useSelector } from "react-redux";
import useDarkmode from "@/hooks/useDarkMode";

const AddDistrict = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuth, auth } = useSelector((state) => state.auth);
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
        name: data.name,
        service_area_id: data.service_area_id,
        home_delivery: data.home_delivery,
        lock_down_service: data.lock_down_service,
        created_admin_id: auth?.user?.user_info?.id,
      };

      const accessToken = auth.accessToken;

      // Make the POST request
      await addContent(newData, "district", reset, setIsLoading, accessToken);
    } catch (error) {
      console.error("Error creating slider:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">
          Create New District
        </h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditDistrictsForm
              register={register}
              errors={errors}
              reset={reset}
              control={control}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDistrict;
