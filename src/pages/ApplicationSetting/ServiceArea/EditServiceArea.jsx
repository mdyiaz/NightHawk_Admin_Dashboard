import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddEditServiceAreaForm from "./AddEditServiceAreaForm";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetServiceAreaByIdQuery } from "@/store/api/app/ApplicationSetting/serviceAreaApiSlice";
import editContent from "@/hooks/editContent";
import useDarkmode from "@/hooks/useDarkMode";
import { useSelector } from "react-redux";

const EditServiceArea = () => {
    const { isAuth, auth } = useSelector((state) => state.auth);
    const { id } = useParams();
    const { data: singleServiceArea } = useGetServiceAreaByIdQuery(id);
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
        if (singleServiceArea) {
            setWeightType(singleServiceArea.weight_type);
        }
    }, [singleServiceArea]);
    console.log("singleServiceArea", singleServiceArea?.weight_type)

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

        try {
            const newData = {
                name: data.name,
                cod_charge: data.cod_charge,
                weight_type: data.serviceArea,
                default_charge: data.default_charge,
                delivery_time: data.delivery_time,
                details: data.details,
            };
            const accessToken = auth.accessToken;

            // Make the POST request
            await editContent(newData, "service-area", id, setIsLoading, accessToken);
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    return (
        <div className="px-4 mb-6">

            <div className={`border border-[rgb(226 232 240)] p-3 rounded-[5px]  mt-[20px] ${isDark ? "#282828" : "bg-white"}`}>
                <h3 className="text-[18px] font-semibold mb-3 mt-3">
                    Edit Service Area
                </h3>
                <hr className="pt-3" />
                <div>
                    <form onSubmit={handleSubmit(handleSliderSubmit)}>
                        <AddEditServiceAreaForm
                            register={register}
                            errors={errors}
                            reset={reset}
                            singleServiceArea={singleServiceArea?.data}
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

export default EditServiceArea;
