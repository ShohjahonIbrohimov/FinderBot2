import axios from "axios";

const createProduct = (data) => {
  return axios({
    url: "/telegram/product/create",
    method: "POST",
    data,
  });
};

const getProducts = (data) => {
  return axios({
    url: "/telegram/product/all",
    method: "GET",
  });
};

const deleteProduct = (id) => {
  return axios({
    url: `/telegram/product/delete/${id}`,
    method: "DELETE",
  });
};

export { createProduct, getProducts, deleteProduct };
