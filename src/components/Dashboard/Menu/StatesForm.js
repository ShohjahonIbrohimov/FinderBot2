import React, { useEffect, useState } from "react";
import { getPodCategories } from "../../../api/calls/pod_category";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getCategories } from "../../../api/calls/category";

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
  change,
}) => {
  const [podcategories, setpodcategories] = useState([]);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getPodCategories().then((res) => setpodcategories(res.data.data));
    getCategories().then((res) => setcategories(res.data.data));
  }, [change]);

  const cat_id = watch("category_id");

  useEffect(() => {
    setValue(
      "category_name",
      podcategories.filter((c) => c._id === cat_id)[0]?.name
    );
  }, [cat_id]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-inputs-wrap">
        <label>Гео:</label>
        <br />
        <input name="name" ref={register({ required: true })} />
        <br />
        <label>Название подкатегории:</label>
        <br />
        <select name="category_id" ref={register({ required: true })}>
          <option value="">Выберите подкатегории</option>
          {podcategories.map((c) => (
            <option value={c._id}>{c.name}</option>
          ))}
        </select>
        <br />
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
      </div>
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default ProductsForm;
