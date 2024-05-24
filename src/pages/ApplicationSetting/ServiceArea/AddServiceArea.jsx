import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddEditServiceAreaForm from "./AddEditServiceAreaForm";
import { toast } from "react-toastify";
import Breadcumb from "@/components/shared/BreadCumb";
import addContent from "@/hooks/addContent";
import { useSelector } from "react-redux";
import useDarkmode from "@/hooks/useDarkMode";

const AddServiceArea = () => {
    const { isAuth, auth } = useSelector((state) => state.auth);

    console.log("auth", auth);
    const [isDark] = useDarkmode();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        watch,
        control
    } = useForm();

    const [weightType, setWeightType] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
        console.log(data);
        // data.weightType = weightType;

        try {
            // Create a new FormData object

            const newData = {
                name: data.name,
                cod_charge: data.cod_charge,
                weight_type: data.weightType,
                default_charge: data.default_charge,
                delivery_time: data.delivery_time,
                details: data.details,
                created_admin_id: auth?.user?.user_info?.id
            };

            const accessToken = auth.accessToken;

            addContent(newData, "service-area", reset, setIsLoading, accessToken )

        } catch (error) {
            console.error("Error creating slider:", error);
        }
    };



    return (
        <div className="px-4 mb-6">

            <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
                <h3 className="text-[18px] font-semibold mb-3 mt-3">
                    Create New Service Area
                </h3>
                <hr className="pt-3" />
                <div className="">
                    <form onSubmit={handleSubmit(handleSliderSubmit)}>
                        <AddEditServiceAreaForm
                            register={register}
                            errors={errors}
                            reset={reset}
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

export default AddServiceArea;
