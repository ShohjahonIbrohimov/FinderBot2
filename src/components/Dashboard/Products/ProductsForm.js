import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import FileInput from "../../Reusable/FileInput";
import LoaderBtn from "../../Reusable/LoaderBtn";

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [categories, setcategories] = useState([]);
  const [image, setImage] = useState(null);

  const cat_id = watch("category_id");

  useEffect(() => {
    setValue(
      "category_name",
      categories.filter((c) => c._id === cat_id)[0]?.name
    );
    console.log(image);
    setValue("file", image);
  }, [cat_id, image]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
  }, []);

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
      <select name="type_name" ref={register({ required: true })}>
        <option value="BM Facebook 50$">BM Facebook 50$</option>
        <option value="BM Facebook 250$">BM Facebook 250$</option>
        <option value="AK FB ЗРД + ФП + БМ + TOKEN EAAB">
          AK FB ЗРД + ФП + БМ + TOKEN EAAB
        </option>
        <option value="Соц + БМ + ФП + линк инвайта в БМ + EAAB (личка) + EAAG (БМ)">
          Соц + БМ + ФП + линк инвайта в БМ + EAAB (личка) + EAAG (БМ)
        </option>
        <option value=" Аккаунты ФБ ФП есть 14+ дней фарма + Token EAAB (есть фото) с друзьями">
          Аккаунты ФБ ФП есть 14+ дней фарма + Token EAAB (есть фото) с друзьями
          .
        </option>
        <option value="BM TRUST 250$">BM TRUST 250$</option>
        <option value="BM VERIFIED (БЕЗ ДНЕВНОГО ЛИМИТА) -">
          BM VERIFIED (БЕЗ ДНЕВНОГО ЛИМИТА) -
        </option>
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
      <label>Категория:</label>
      <br />
      <select name="category_id" ref={register({ required: true })}>
        {categories.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>Название категории :</label>
      <br />
      <input disabled name="category_name" ref={register({ required: true })} />
      <br />
      <label>Цена:</label>
      <br />
      <input name="price" ref={register({ required: true })} />
      <label>Импортировать.ф:</label>
      <input
        style={{ height: "0px", padding: "0px", margin: "0px", border: "none" }}
        name="file"
        ref={register({ required: true })}
      />
      <FileInput setValue={setImage} register={register} />
      <br />
      <LoaderBtn loading={loading} title="Добавить" />
    </form>
  );
};

export default ProductsForm;
