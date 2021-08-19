import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createProduct, getProducts } from "../../../api/calls/product";
import Loader from "../../Reusable/Loader";
import LoaderBtn from "../../Reusable/LoaderBtn";

function CreateCreative() {
  const [open, setopen] = useState(false);
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [tloading, settloading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleGetProducts = () => {
    settloading(true);
    getProducts().then((res) => {
      settloading(false);
      setproducts(res.data.data);
    });
  };

  const handleModalOpen = () => {
    setopen(true);
  };

  const onSubmit = (data) => {
    setloading(true);
    createProduct(data)
      .then((res) => {
        setopen(false);
        handleGetProducts();
        setloading(false);
        reset();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div class="w3-container">
      <div class="container">
        <div class="page-header">
          <h2 class="page-header__title">Добавления аккаунта для продажа</h2>
          <button id="myBtn" class="app-button" onClick={handleModalOpen}>
            Добавить
          </button>
        </div>

        <div style={{ minHeight: "80vh" }}>
          <Loader light={false} loading={tloading} />
          <table>
            <tr>
              <th>Плошадки</th>
              <th>Тип</th>
              <th>Гео </th>
              <th>Цена</th>
              <th>Импортировать.ф</th>
              <th></th>
            </tr>
            <tbody>
              {products.map((p) => (
                <tr>
                  <td>{p.name}</td>
                  <td>{p.category_id}</td>
                  <td>{p.states_id}</td>
                  <td>{p.price}</td>
                  <td>{p.description}</td>
                  <td
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span class="icon_wrap">
                      <i class="bx bxs-edit" style={{ color: "#555" }}></i>
                    </span>
                    <span class="icon_wrap">
                      <i class="bx bxs-trash-alt" style={{ color: "#555" }}></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          id="myModal"
          class="modal"
          style={open ? { display: "block" } : {}}
        >
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" onClick={() => setopen(false)}>
                &times;
              </span>
              <h3>Добавления аккаунта для продажа</h3>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)} class="support-form">
                <label>Плошадки:</label>
                <br />
                <select name="product" ref={register({ required: true })}>
                  <option value="1">Facebook</option>
                  <option value="2">Tik-tok</option>
                  <option value="3">Google</option>
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
                    Аккаунты ФБ ФП есть 14+ дней фарма + Token EAAB (есть фото)
                    с друзьями .
                  </option>
                  <option value="6">BM TRUST 250$</option>
                  <option value="7">BM VERIFIED (БЕЗ ДНЕВНОГО ЛИМИТА) -</option>
                </select>
                <br />
                <label>Гео :</label>
                <br />
                <select name="states_id" ref={register({ required: true })}>
                  <option value="1">Россия</option>
                  <option value="2">Франция</option>
                  <option value="3">Украина</option>
                  <option value="4">США</option>
                </select>
                <br />
                <label>Цена:</label>
                <br />
                <input
                  type="tgaccount"
                  name="price"
                  ref={register({ required: true })}
                />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCreative;
