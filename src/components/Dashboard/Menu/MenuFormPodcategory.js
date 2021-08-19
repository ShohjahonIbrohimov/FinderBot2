import React, { useState, useEffect } from "react";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getCategories } from "../../../api/calls/category";

const MenuFormPodcategory = ({ handleSubmit, onSubmit, register, loading }) => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Категория:</label>
      <br />
      <select name="name" ref={register({ required: true })}>
        {categories.map((c) => (
          <option value={c.id}>{c.name}</option>
        ))}
      </select>
      <label>Название меню:</label>
      <br />
      <input type="tgaccount" name="name" ref={register({ required: true })} />
      <br />
      <br />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default MenuFormPodcategory;
