import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditDistrictsForm from "./AddEditDistrictsForm";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetDistrictByIdQuery } from "@/store/api/app/ApplicationSetting/District/districtApiSlice";
import editContent from "@/hooks/editContent";
import useDarkmode from "@/hooks/useDarkMode";
import { useSelector } from "react-redux";

const EditDistrict = () => {
  const { isAuth, auth } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isDark] = useDarkmode();


  const { data: singleDistrict } = useGetDistrictByIdQuery(id);
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
      const newData = {
        name: data.name,
        service_area_id: data.service_area_id,
        home_delivery: data.home_delivery,
        lock_down_service: data.lock_down_service,
      };

      // Make the POST request
      const accessToken = auth.accessToken;
      await editContent(newData, "district", id, setIsLoading, accessToken);
    } catch (error) {
      console.error("Error updating itemType:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">Edit District</h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditDistrictsForm
              register={register}
              errors={errors}
              reset={reset}
              update={true}
              singleDistrict={singleDistrict?.data}
              control={control}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDistrict;
