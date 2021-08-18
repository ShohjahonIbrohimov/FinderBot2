import React from "react";
import TextArea from "../../../Reusable/TextArea";
import style from "./CreateNews.module.css";
import { useForm } from "react-hook-form";
import BannerNews from "./BannerNews";
import Select from "../../../Reusable/Select";
import { postNews } from "../../../../api/api_calls";
import toast from "react-hot-toast";

const news_categories = [
  {
    label: "Новые офферы",
    value: 0,
  },
  {
    label: "Приостановка офферов",
    value: 1,
  },
  {
    label: "Изменение офферов",
    value: 2,
  },
  {
    label: "Расширение гео",
    value: 3,
  },
  {
    label: "Расширение гео",
    value: 4,
  },
  {
    label: "Новые лендинги",
    value: 5,
  },
  {
    label: "Системные новости",
    value: 6,
  },
  {
    label: "Промо акции",
    value: 7,
  },
];
function CreateNews() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const submitNews = (data) => {
    toast.promise(postNews({ ...data, type: data.type.value }), {
      loading: "Создание новостей...",
      success: () => {
        reset({});
        return "Новости созданы!";
      },
      error: <b>Ошибка при создании предложения</b>,
    });
  };

  return (
    <div class="w3-container w3-margin-left">
    <div class="wrap_first_page">
      <h1 class="main_title">Важное инфо</h1>

      <label for="upload" class="img_gif_uploader">
        <input type="file" id="upload" />
        <h2>&#43;</h2>
        <p>Фото и Гиф</p>
      </label>

      <div class="triple_btn">
        <button class="w3-button w3-small w3-blue w3-round w3-ripple">
          Добавить
        </button>
        <button class="w3-button w3-small w3-red w3-round w3-ripple">
          Удалить
        </button>
        <button class="w3-button w3-small w3-indigo w3-round w3-ripple">
          Сохранить
        </button>
      </div>

      <div class="top_part">
        <h3>наш бот умеит все</h3>
      </div>

      <div class="button_wrapper">
        <div class="left_btn_wrapper">
          <button class="w3-button w3-small w3-blue w3-round w3-ripple">
            Добавить
          </button>
          <button class="w3-button w3-small w3-green w3-round w3-ripple">
            Изменить
          </button>
          <button class="w3-button w3-small w3-red w3-round w3-ripple">
            Удалить
          </button>
        </div>
        <div class="right_btn_wrapper">
          <button class="w3-button w3-small w3-blue w3-round w3-ripple">
            Сохранить
          </button>
        </div>
      </div>

      <div class="bottom_part"></div>

      <div class="save_btn">
        <button
          class="w3-button w3-small w3-blue w3-round w3-right w3-ripple"
        >
          Сохранить
        </button>
      </div>
    </div>

    <div class="important_news_wrapper">
      <h2>История важное инфо</h2>
      <div class="news_block">
        <div class="date">
          <p>14:20</p>
          <p>10.8.2021</p>
        </div>
        <div class="img_news"></div>
        <div class="news_text">
          <p>
            Здесь должно отображатся с какого плашадку и с кагого типа
            продается - Больше все эти даный берется с Сбота и система
            платежках .
          </p>
        </div>
      </div>
      <div class="news_block">
        <div class="date">
          <p>14:20</p>
          <p>10.8.2021</p>
        </div>
        <div class="img_news"></div>
        <div class="news_text">
          <p>
            Здесь должно отображатся с какого плашадку и с кагого типа
            продается - Больше все эти даный берется с Сбота и система
            платежках .
          </p>
        </div>
      </div>
      <div class="news_block">
        <div class="date">
          <p>14:20</p>
          <p>10.8.2021</p>
        </div>
        <div class="img_news"></div>
        <div class="news_text">
          <p>
            Здесь должно отображатся с какого плашадку и с кагого типа
            продается - Больше все эти даный берется с Сбота и система
            платежках .
          </p>
        </div>
      </div>
      <div class="news_block">
        <div class="date">
          <p>14:20</p>
          <p>10.8.2021</p>
        </div>
        <div class="img_news"></div>
        <div class="news_text">
          <p>
            Здесь должно отображатся с какого плашадку и с кагого типа
            продается - Больше все эти даный берется с Сбота и система
            платежках .
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CreateNews;
