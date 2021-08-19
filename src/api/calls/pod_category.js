import axios from "axios";

const createPodCategory = (data) => {
  return axios({
    url: "/telegram/podcategory/create",
    method: "POST",
    data,
  });
};

const getPodCategories = () => {
  return axios({
    url: "/telegram/podcategory/all",
    method: "GET",
  });
};

export { createPodCategory, getPodCategories };
