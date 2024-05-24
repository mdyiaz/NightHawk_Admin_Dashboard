import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditAreaForm from "./AddEditAreaForm";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetAreaByIdQuery } from "@/store/api/app/ApplicationSetting/Area/areaApiSlice";
import editContent from "@/hooks/editContent";
import { useGetDistrictsQuery } from "@/store/api/app/ApplicationSetting/District/districtApiSlice";
import useDarkmode from "@/hooks/useDarkMode";

const EditArea = () => {
  const { isAuth, auth } = useSelector((state) => state.auth);
  const { id } = useParams();
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

  const { data: district, isLoading: districtLoading, isFetching: districtFetching } = useGetDistrictsQuery();
  const { data: singleArea, isFetching } = useGetAreaByIdQuery(id);


  const handleSliderSubmit = async (data) => {
    console.log(data);

    try {
      const newData = {
        name: data.name,
        district_id: data.district_id,
        post_code: data.post_code,
      };

      // Make the POST request
      const accessToken = auth.accessToken;
      await editContent(newData, "area", id, setIsLoading, accessToken);
    } catch (error) {
      console.error("Error updating itemType:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">Edit Areas</h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditAreaForm
              register={register}
              errors={errors}
              reset={reset}
              update={true}
              district={district?.data}
              singleArea={singleArea?.data}
              control={control}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditArea;
