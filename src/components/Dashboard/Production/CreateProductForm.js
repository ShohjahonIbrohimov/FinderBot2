import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { fields } from "./items";

const CreateProductForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [categories, setcategories] = useState([]);

  const cat_id = watch("category_id");

  console.log(cat_id);

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {fields.map((field) => {
        if (field.type === "text" || field.type === "number") {
          return (
            <React.Fragment>
              <div style={{ width: "24%" }}>
                <label>{field.label}:</label>
                <br />
                <input name={field.name} ref={register(field.rules)} />
              </div>
            </React.Fragment>
          );
        } else if (field.type === "select") {
          return (
            <React.Fragment>
              <div style={{ width: "24%" }}>
                <label>{field.label}:</label>
                <br />
                <select name={field.name} ref={register(field.rules)}>
                  {field.options.map((o) => (
                    <option value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </React.Fragment>
          );
        } else if (field.type === "date") {
          return (
            <React.Fragment>
              <div style={{ width: "24%" }}>
                <label>{field.label}:</label>
                <br />
                <input
                  type={field.type}
                  name={field.name}
                  ref={register(field.rules)}
                />
              </div>
            </React.Fragment>
          );
        }
        return "";
      })}
      <div style={{ width: "24%" }}>
        <br />
        <LoaderBtn loading={loading} title="Добавить" />
      </div>
    </form>
  );
};

export default CreateProductForm;
