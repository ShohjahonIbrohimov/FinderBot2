import React, { useState } from "react";
import { checkToken } from "../../../api/calls/bot-settings";
import LoaderBtn from "../../Reusable/LoaderBtn";

const CreateProductForm = ({
  onSubmit,
  loading,
  handleSubmit,
  register,
  setValue,
  reset,
}) => {
  const [loading2, setloading2] = useState(false);
  const [checked, setchecked] = useState(false);
  const [botData, setbotData] = useState({});

  const onSubmit2 = (data) => {
    setloading2(true);
    if (!checked) {
      checkToken(data.token).then((res) => {
        setchecked(true);
        setbotData({
          first_name: res.data.result.first_name,
          username: res.data.result.username,
        });
        setValue("first_name", res.data.result.first_name);
        setValue("username", res.data.result.username);
        setloading2(false);
      });
    } else {
      delete data.token;
      onSubmit(botData);
    }
  };

  const handleReset = () => {
    reset({});
    setchecked(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit2)} class="support-form">
      <label>Токен:</label>
      <br />
      <input name="token" ref={register({ required: true })} />
      <br />
      <label>Имя:</label>
      <input disabled name="first_name" ref={register({ required: false })} />
      <br />
      <label>Имя пользователя:</label>
      <input disabled name="username" ref={register({ required: false })} />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <LoaderBtn
            loading={checked ? loading : loading2}
            title={checked ? "Создать бота" : "Отправить"}
          />
        </div>
        <div style={{ marginLeft: "0.5rem" }} onClick={handleReset}>
          <LoaderBtn
            type="button"
            disabled={false}
            background="#E54E4E"
            loading={false}
            title={"Отмена"}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateProductForm;
