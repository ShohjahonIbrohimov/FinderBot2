import axios from "axios";

const createState = (data) => {
  return axios({
    url: "/telegram/states/create",
    method: "POST",
    data,
  });
};

const getStates = (data) => {
  return axios({
    url: "/telegram/states/all",
    method: "GET",
  });
};

const deleteProduct = (id) => {
  return axios({
    url: `/telegram/product/delete/${id}`,
    method: "DELETE",
  });
};

export { createState, getStates, deleteProduct };
