import React, { useState, useEffect } from "react";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getCategories } from "../../../api/calls/category";

const MenuFormPodcategory = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [categories, setcategories] = useState([]);
  const cat_id = watch("category_id");

  useEffect(() => {
    setValue(
      "category_name",
      categories.filter((c) => c._id === cat_id)[0]?.name
    );
  }, [cat_id]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
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
      <label>Название меню:</label>
      <br />
      <input name="name" ref={register({ required: true })} />
      <input
        style={{
          height: "0px",
          margin: "0px",
          padding: "0px",
          overflow: "hidden",
          border: "none",
        }}
        name="category_name"
        ref={register({ required: true })}
      />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default MenuFormPodcategory;
