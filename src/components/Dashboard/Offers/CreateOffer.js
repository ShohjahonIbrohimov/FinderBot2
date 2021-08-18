import React, { useEffect, useState, useRef } from "react";
import {
  crepc_countries,
  field_settings,
  publish_options,
  offer_info_fields,
  countries,
  pricelist_ocuntries,
} from "./assets/offer_fields";
import styles from "./styles/CreateOffer.module.css";
import { useForm } from "react-hook-form";
import Button from "../../Reusable/Button";
import Benefits from "./Benefits";
import TargetAudience from "./TargetAudience";
import ProsPartner from "./ProsPartner";
import ProsClient from "./ProsClient";
import Checkbox from "../../Reusable/Checkbox";
import FileInput from "../../Reusable/FileInput";
import WorkingHour from "./WorkingHour";
import InputText from "../../Reusable/InputText";
import TextArea from "../../Reusable/TextArea";
import Radio from "../../Reusable/Radio";
import Select from "../../Reusable/Select";
import TrafficCountry from "./TrafficCountry";
import PriceListCountry from "./PriceListCountry";
import CrEpc from "./CrEpc";
import { serialize } from "object-to-formdata";
import { AdminImages } from "../../../constants/icons";
import MultipleSelect from "../../Reusable/MultipleSelect";
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

  // Watches
  const working_hours_country = watch("working_hours_country");
  const traffic_country = watch("traffic_country");
  const pricelist_country = watch("pricelist_country");
  const crepc_country = watch("crepc_country");

  return (
    <div class="w3-container w3-margin-left">
    <div class="wrap_first_page">
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
          <button class="w3-button w3-small w3-red w3-round">
            Удалить
          </button>
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
    </div>
  </div>
  );
};

export default CreateOffer;
