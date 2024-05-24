import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditServiceTypeForm from "./AddEditServiceTypeForm";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetServiceTypeByIdQuery } from "@/store/api/app/ApplicationSetting/ServiceTypeApiSlice";
import editContent from "@/hooks/editContent";
import useDarkmode from "@/hooks/useDarkMode";
import { useSelector } from "react-redux";

const EditServiceType = () => {
  const { isAuth, auth } = useSelector((state) => state.auth);
  const { id } = useParams();
  const { data: singleServiceType } = useGetServiceTypeByIdQuery(id);
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
      const newData = {
        title: data.title,
        service_area_id: data.service_area_id,
        rate: data.rate,
      };

      // Make the POST request
      const accessToken = auth.accessToken;
      await editContent(newData, "service-type", id, setIsLoading, accessToken);
    } catch (error) {
      console.error("Error updating blog:", error);
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
            {console.log("value:;", singleServiceType?.data?.service_area_id)}
            <AddEditServiceTypeForm
              register={register}
              errors={errors}
              reset={reset}
              singleServiceType={singleServiceType?.data}
              update={true}
              name="service_area_id"
              control={control}
              options={options}
              defaultValue={singleServiceType?.data?.service_area_id}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditServiceType;
