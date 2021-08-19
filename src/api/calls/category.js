import axios from "axios";

const createCategory = (data) => {
  return axios({
    url: "/telegram/category/create",
    method: "POST",
    data,
  });
};

const getCategories = () => {
  return axios({
    url: "/telegram/category/all",
    method: "GET",
  });
};

export { createCategory, getCategories };
