import React from "react";
import LoaderBtn from "../../../Reusable/LoaderBtn";

const MenuForm = ({ handleSubmit, onSubmit, register, loading }) => {
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-inputs-wrap">
        <label>Название меню:</label>
        <br />
        <textarea
          rows="8"
          type="tgaccount"
          name="description"
          ref={register({ required: true })}
        />
        <br />
      </div>
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default MenuForm;
