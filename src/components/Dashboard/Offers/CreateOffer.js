import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { serialize } from "object-to-formdata";
import { postOffer } from "../../../api/api_calls";
import toast from "react-hot-toast";

const defaultValues = {
  working_hours_country: "russia",
  traffic_country: "russia",
  pricelist_country: "russia",
  crepc_country: "russia",
};

const CreateOffer = () => {
  const { register, errors, control, handleSubmit, watch, reset } =
    useForm(defaultValues);
  const [file, setFile] = useState(null);
  const [imageUrl, setimageUrl] = useState("");

  const onSubmit = (data) => {
    delete data.working_hours_country;
    delete data.traffic_country;
    delete data.pricelist_country;
    delete data.crepc_country;
    let formData = serialize({
      ...data,
      offer_category: data.offer_category.value,
      offer_direction: data.offer_direction.value,
      offer_photo: imageUrl,
    });
    toast.promise(postOffer(formData), {
      loading: "Создание предложения ...",
      success: () => {
        reset({});
        return "Предложение создано!";
      },
      error: <b>Ошибка при создании предложения</b>,
    });
  };

  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file);
  };

  const inputFile = useRef(null);

  const onEdit = () => {
    inputFile.current.click();
  };

  const onDelete = () => {
    setFile("");
  };

  useEffect(() => {
    reset(defaultValues);
  }, []);

  return (
    <div class="w3-container w3-margin-left">
      {/* <div class="wrap_first_page">
        <h1 class="main_title">Добавления текста о боте</h1>
        <div class="top_part">
          <h3>наш бот умеит все</h3>
        </div>

        <div class="button_wrapper">
          <div class="left_btn_wrapper">
            <button class="w3-button w3-small w3-blue w3-round">
              Добавить
            </button>
            <button class="w3-button w3-small w3-green w3-round">
              Изменить
            </button>
            <button class="w3-button w3-small w3-red w3-round">Удалить</button>
          </div>
          <div class="right_btn_wrapper">
            <button class="w3-button w3-small w3-blue w3-round">
              Сохранить
            </button>
          </div>
        </div>

        <div class="bottom_part"></div>

        <div class="save_btn">
          <button class="w3-button w3-small w3-blue w3-round w3-right">
            Сохранить
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default CreateOffer;
