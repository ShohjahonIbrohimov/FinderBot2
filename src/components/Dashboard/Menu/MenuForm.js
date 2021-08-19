import React from "react";
import LoaderBtn from "../../Reusable/LoaderBtn";

const MenuForm = ({ handleSubmit, onSubmit, register, loading }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Название меню:</label>
      <br />
      <input type="tgaccount" name="name" ref={register({ required: true })} />
      <br />
      <br />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default MenuForm;
