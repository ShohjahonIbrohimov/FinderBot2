import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import { getPodCategories } from "../../../api/calls/pod_category";
import { getSaleAccounts } from "../../../api/calls/sale";
import FileInput from "../../Reusable/FileInput";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getStates } from "../../../api/calls/states";

const options = [
  {
    label: "Facebook",
    value: "Facebook",
  },
  {
    label: "Tiktok",
    value: "Tiktok",
  },
  {
    label: "Instagram",
    value: "Instagram",
  },
  {
    label: "YouTube",
    value: "YouTube",
  },
];

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [categories, setcategories] = useState([]);
  const [podcategories, setpodcategories] = useState([]);
  const [states, setStates] = useState([]);
  const [sales, setsales] = useState([]);

  const [image, setImage] = useState(null);

  const cat_id = watch("category_id");
  const stat_id = watch("states_id");
  const name = watch("name");

  useEffect(() => {
    setValue("image", image);
    setValue("name", name?.trim());
    setValue(
      "states_name",
      states.filter((state) => state._id === stat_id)[0]?.name
    );
  }, [stat_id, image, name]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
    getPodCategories().then((res) => setpodcategories(res.data.data));
    getStates().then((res) => setStates(res.data.data));
    getSaleAccounts().then((res) => setsales(res.data.data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Название:</label>
      <br />
      <input name="name" ref={register({ required: true })} />
      <label>Категория:</label>
      <br />
      <select name="category_id" ref={register({ required: true })}>
        {categories.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <label>Тип:</label>
      <br />
      <select name="type_name" ref={register({ required: true })}>
        {options.map((c) => (
          <option value={c.value}>{c.label}</option>
        ))}
      </select>
      <br />
      <label>Подкатегория:</label>
      <br />
      <select name="category_name" ref={register({ required: true })}>
        {podcategories.map((c) => (
          <option value={c.name}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>Гео:</label>
      <br />
      <select name="states_id" ref={register({ required: true })}>
        {states.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <br />
      <label>Аккаунт:</label>
      <br />
      <select name="file" ref={register({ required: true })}>
        {sales.map((c) => (
          <option value={c._id}>
            {c.firstName} + {c.type_os}
          </option>
        ))}
      </select>
      <br />
      <label>Цена:</label>
      <br />
      <input name="price" ref={register({ required: true })} />
      <label>Изображение:</label>
      <input
        style={{ height: "0px", padding: "0px", margin: "0px", border: "none" }}
        name="image"
        ref={register({ required: true })}
      />
      <FileInput setValue={setImage} register={register} />
      <br />
      <label>Описание:</label>
      <br />
      <textarea
        rows="6"
        name="description"
        ref={register({ required: true })}
      />
      <LoaderBtn loading={loading} title="Добавить" />
      <input
        style={{ height: "0px", padding: "0px", margin: "0px", border: "none" }}
        name="states_name"
        ref={register({ required: true })}
      />
    </form>
  );
};

export default ProductsForm;
