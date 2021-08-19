import React from "react";
import LoaderBtn from "../../Reusable/LoaderBtn";

const CreateProductForm = ({ handleSubmit, onSubmit, register, loading }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Плошадки:</label>
      <br />
      <select name="name" ref={register({ required: true })}>
        <option value="Facebook">Facebook</option>
        <option value="Tik-tok">Tik-tok</option>
        <option value="Google">Google</option>
      </select>
      <br />
      <label>Тип:</label>
      <br />
      <select name="sub_product" ref={register({ required: true })}>
        <option value="1">BM Facebook 50$</option>
        <option value="2">BM Facebook 250$</option>
        <option value="3">AK FB ЗРД + ФП + БМ + TOKEN EAAB</option>
        <option value="4">
          Соц + БМ + ФП + линк инвайта в БМ + EAAB (личка) + EAAG (БМ)
        </option>
        <option value="5">
          Аккаунты ФБ ФП есть 14+ дней фарма + Token EAAB (есть фото) с друзьями
          .
        </option>
        <option value="6">BM TRUST 250$</option>
        <option value="7">BM VERIFIED (БЕЗ ДНЕВНОГО ЛИМИТА) -</option>
      </select>
      <br />
      <label>Гео :</label>
      <br />
      <select name="states_id" ref={register({ required: true })}>
        <option value="Россия">Россия</option>
        <option value="Франция">Франция</option>
        <option value="Украина">Украина</option>
        <option value="США">США</option>
      </select>
      <br />
      <label>Цена:</label>
      <br />
      <input type="tgaccount" name="price" ref={register({ required: true })} />
      <label>Импортировать.ф:</label>
      <br />
      <textarea
        name="description"
        ref={register({ required: true })}
        rows="4"
        cols="50"
      />
      <br />
      <br />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default CreateProductForm;
