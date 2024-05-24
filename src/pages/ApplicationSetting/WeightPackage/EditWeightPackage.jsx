import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import AddEditWeightPackageForm from "./AddEditWeightPackageForm";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetWeightTypeByIdQuery } from "@/store/api/app/ApplicationSetting/weightPackagesApiSlice";
import editContent from "@/hooks/editContent";
import useDarkmode from "@/hooks/useDarkMode";
import { useSelector } from "react-redux";

const EditWeightPackage = () => {
  const { isAuth, auth } = useSelector((state) => state.auth);
  const { id } = useParams();
  const { data: singleWeightPackage } = useGetWeightTypeByIdQuery(id);
  console.log("singleWeightPackage ", singleWeightPackage)
  const [isDark] = useDarkmode();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    control
  } = useForm();

  const [weightType, setWeightType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (singleWeightPackage) {
      setWeightType(singleWeightPackage.weight_type);
    }
  }, [singleWeightPackage]);
  console.log("singleWeightPackage ", singleWeightPackage?.weight_type)

  const handleChange = (e) => {
    setWeightType(e.target.value);
  };
  const optionWeightType = [
    {
      value: "1",
      label: "KG",
    },
    {
      value: "2",
      label: "CFT",
    },
  ];

  const handleSliderSubmit = async (data) => {
    // data.weightType = weightType
    console.log(data);
    try {
      const newData = {
        name: data.name,
        title: data.title,
        weight_type: data.weight_type,
        rate: data.rate,
        details: data.details,
      };
      const accessToken = auth.accessToken;

      // Make the POST request
      await editContent(newData, "weight-packages", id, setIsLoading, accessToken);
    } catch (error) {
      console.error("Error updating weightPackage:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">
          Edit Weight Package
        </h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditWeightPackageForm
              register={register}
              errors={errors}
              reset={reset}
              singleWeightPackage={singleWeightPackage?.data}
              update={true}
              optionWeightType={optionWeightType}
              handleChange={handleChange}
              weightType={weightType}
              control={control}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditWeightPackage;
