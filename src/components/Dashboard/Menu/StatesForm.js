import React, { useEffect, useState } from "react";
import { getPodCategories } from "../../../api/calls/pod_category";
import LoaderBtn from "../../Reusable/LoaderBtn";

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [podcategories, setpodcategories] = useState([]);

  useEffect(() => {
    getPodCategories().then((res) => setpodcategories(res.data.data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Название:</label>
      <br />
      <input name="name" ref={register({ required: true })} />
      <br />
      <label>Название подкатегории:</label>
      <br />
      <select name="podcategory_id" ref={register({ required: true })}>
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
        name="podcategory_name"
        ref={register({ required: true })}
      />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default ProductsForm;
