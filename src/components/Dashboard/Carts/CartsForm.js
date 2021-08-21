import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import { getStates } from "../../../api/calls/states";
import LoaderBtn from "../../Reusable/LoaderBtn";

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [categories, setcategories] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
    getStates().then((res) => setStates(res.data.data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Название:</label>
      <br />
      <input name="name" ref={register({ required: true })} />
      <br />
      <label>Категория:</label>
      <br />
      <select name="category_id" ref={register({ required: true })}>
        {categories.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>State ID:</label>
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
      <label>Описание:</label>
      <br />
      <textarea
        rows="6"
        name="description"
        ref={register({ required: true })}
      />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default ProductsForm;
