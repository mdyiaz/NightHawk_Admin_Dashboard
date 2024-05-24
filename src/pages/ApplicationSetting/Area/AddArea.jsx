import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditAreaForm from "./AddEditAreaForm";
import { toast } from "react-toastify";
import { useGetDistrictsQuery } from "@/store/api/app/ApplicationSetting/District/districtApiSlice";
import addContent from "@/hooks/addContent";
import { useSelector } from "react-redux";
import useDarkmode from "@/hooks/useDarkMode";

const AddArea = () => {
  const { isAuth, auth } = useSelector((state) => state.auth);
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

  const { data: districts, isFetching } = useGetDistrictsQuery();

  const handleSliderSubmit = async (data) => {
    console.log(data);
    try {
      // Create a new FormData object

      const newData = {
        name: data.name,
        district_id: data.district_id,
        post_code: data.post_code,
        created_admin_id: auth?.user?.user_info?.id,
      };

      const accessToken = auth.accessToken;

      // Make the POST request
      await addContent(newData, "area", reset, setIsLoading, accessToken);
    } catch (error) {
      console.error("Error creating slider:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">Create New Area</h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditAreaForm
              register={register}
              errors={errors}
              reset={reset}
              district={districts?.data}
              control={control}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArea;
