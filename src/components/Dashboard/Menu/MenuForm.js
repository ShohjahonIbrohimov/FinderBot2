import React, { useEffect } from "react";
import LoaderBtn from "../../Reusable/LoaderBtn";

const MenuForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const name = watch("name");

  useEffect(() => {
    setValue("name", name?.trim());
  }, [name]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-inputs-wrap">
        <label>Название меню:</label>
        <br />
        <input name="name" ref={register({ required: true })} />
        <br />
      </div>
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default MenuForm;
