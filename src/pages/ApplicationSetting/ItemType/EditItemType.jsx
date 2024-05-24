import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditItemTypeForm from "./AddEditItemTypeForm";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useGetItemTypeByIdQuery } from "@/store/api/app/ApplicationSetting/itemTypeApiSlice";
import editContent from "@/hooks/editContent";
import useDarkmode from "@/hooks/useDarkMode";
import { useSelector } from "react-redux";

const EditItemType = () => {
  const { isAuth, auth } = useSelector((state) => state.auth);
  const { id } = useParams();
  const { data: singleItemType } = useGetItemTypeByIdQuery(id);
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
      const newData = {
        title: data.title,
        rate: data.rate,
        service_area_id: data.service_area_id,
      };

      // Make the POST request
      const accessToken = auth.accessToken;
      await editContent(newData, "item-type", id, setIsLoading, accessToken);
    } catch (error) {
      console.error("Error updating itemType:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">
          Edit Service Type
        </h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditItemTypeForm
              register={register}
              errors={errors}
              reset={reset}
              update={true}
              singleItemType={singleItemType?.data}
              name="service_area_id"
              control={control}
              defaultValue={singleItemType?.data?.service_area_id}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemType;
