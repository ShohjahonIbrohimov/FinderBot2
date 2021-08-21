import axios from "axios";

const createCart = (data) => {
  return axios({
    url: "/telegram/shop/cart/create",
    method: "POST",
    data,
  });
};

const getCarts = (data) => {
  return axios({
    url: "/telegram/shop/cart/all",
    method: "GET",
  });
};

const deleteProduct = (id) => {
  return axios({
    url: `/telegram/product/delete/${id}`,
    method: "DELETE",
  });
};

export { createCart, getCarts };
