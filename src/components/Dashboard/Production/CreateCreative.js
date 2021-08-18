import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import FileInput from "../../Reusable/FileInput";
import InputText from "../../Reusable/InputText";
import Radio from "../../Reusable/Radio";
import { offer_geo, payment_model, scenario } from "./items";
import fields from "../assets/fields";
import Button from "../../Reusable/Button";
import { AdminImages } from "../../../constants/icons";
import ASelect from "../../Reusable/ASelect";
import RSelect from "../../Reusable/Select";
import { serialize } from "object-to-formdata";
import { create_creative } from "../../../api/api_calls";
import toast from "react-hot-toast";

function CreateCreative() {
  const [file, setFile] = useState(null);
  const [imageUrl, setimageUrl] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let formData = serialize({
      ...data,
      category: data.category.value,
      sub_category: data.sub_category.value,
      banner: imageUrl,
    });
    toast.promise(create_creative(formData), {
      loading: "Создание креатива ...",
      success: (e) => {
        console.log(e);
        return "Креатив создан!";
      },
      error: <b>Ошибка при создании предложения</b>,
    });
    console.log(formData);
  };
  const inputFile = useRef();

  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const onEdit = () => {
    inputFile.current.click();
  };

  const onDelete = () => {
    setFile("");
  };

  return (
    
    <div class="w3-container">
    <div class="container">
      <h2>Добавления аккаунта для продажа</h2>
      <div class="item">
        <h3>
          Добавить аккаунты
        </h3>
        <button>+</button>
      </div>
      <div class="item">
        <h3>
          Плошадки
        </h3>
        <select name="" id="">
          <option value="">
            Facebook
          </option>
          <option value="">
            Tik-tok
          </option>
          <option value="">
            Google
          </option>
         
        </select>
      </div>
      <div class="item">
        <h3>
          Тип
        </h3>
        <select name="" id="">
          <option value="">
            BM Facebook 50$
          </option>
          <option value="">
            BM Facebook 250$
          </option>
          <option value="">
            AK FB ЗРД + ФП + БМ + TOKEN EAAB
          </option>
          <option value="">
            Соц + БМ + ФП + линк инвайта в БМ + EAAB (личка) + EAAG (БМ) 

          </option>
          <option value="">
            Аккаунты ФБ  ФП есть 14+ дней фарма + Token EAAB (есть фото) с друзьями .

          </option>
          <option value="">
            BM TRUST 250$
          </option>
          <option value="">
            BM VERIFIED (БЕЗ ДНЕВНОГО ЛИМИТА) -
          </option>
        </select>
      </div>
      <div class="item">
        <h3>
          Гео
        </h3>
        <select name="" id="">
          <option value="">
            Россия
          </option>
          <option value="">
            Франция
          </option>
          <option value="">
            Украина
          </option>
          <option value="">
            США
          </option>
        </select>
      </div>
      <div class="item">
        <h3>
          Цена
        </h3>
        <input type="text" value="250$" name="" id="" />
      </div>
      <div class="item f-end">
        <button>Импортировать.ф</button>
        <textarea  name="" id="" cols="30" rows="10"></textarea>
        <button>Добавить</button>
      </div>
    </div>
  </div>
  );
}

export default CreateCreative;
