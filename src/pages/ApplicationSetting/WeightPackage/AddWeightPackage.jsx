import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditWeightPackageForm from "./AddEditWeightPackageForm";
import { toast } from "react-toastify";
import addContent from "@/hooks/addContent";
import { useSelector } from "react-redux";
import useDarkmode from "@/hooks/useDarkMode";

const AddWeightPackage = () => {
  const [weightType, setWeightType] = useState("");
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
    try {
      // Create a new FormData object

      const newData = {
        name: data.name,
        title: data.title,
        weight_type: data.weight_type,
        rate: data.rate,
        details: data.details,
        created_admin_id: auth?.user?.user_info?.id
      };

      const accessToken = auth.accessToken;

      // Make the POST request
      await addContent(newData, "weight-packages", reset, setIsLoading, accessToken)
    } catch (error) {
      console.error("Error creating slider:", error);
    }
  };

  return (
    <div className="px-4 mb-6">

      <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
        <h3 className="text-[18px] font-semibold mb-3 mt-3">
          Create New Weight Package
        </h3>
        <hr className="mb-3" />
        <div>
          <form onSubmit={handleSubmit(handleSliderSubmit)}>
            <AddEditWeightPackageForm
              register={register}
              errors={errors}
              reset={reset}
              optionWeightType={optionWeightType}
              handleChange={handleChange}
              weightType={weightType}
              control={control}
              isLoading
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWeightPackage;
