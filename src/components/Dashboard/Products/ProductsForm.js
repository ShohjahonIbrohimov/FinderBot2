import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import { getPodCategories } from "../../../api/calls/pod_category";
import FileInput from "../../Reusable/FileInput";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getStates } from "../../../api/calls/states";

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

  const [image, setImage] = useState(null);

  const cat_id = watch("category_id");

  useEffect(() => {
    setValue(
      "category_name",
      categories.filter((c) => c._id === cat_id)[0]?.name
    );
    setValue("file", image);
  }, [cat_id, image]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
    getPodCategories().then((res) => setpodcategories(res.data.data));
    getStates().then((res) => setStates(res.data.data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Категория:</label>
      <br />
      <select name="category_id" ref={register({ required: true })}>
        {categories.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>Подкатегория:</label>
      <br />
      <select name="type_name" ref={register({ required: true })}>
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
      <label>Цена:</label>
      <br />
      <input name="price" ref={register({ required: true })} />
      <label>Импортировать.ф:</label>
      <input
        style={{ height: "0px", padding: "0px", margin: "0px", border: "none" }}
        name="file"
        ref={register({ required: true })}
      />
      <FileInput setValue={setImage} register={register} />
      <br />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default ProductsForm;
