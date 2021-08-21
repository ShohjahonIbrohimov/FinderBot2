import axios from "axios";

const createSaleAccount = (data) => {
  return axios({
    url: "/telegram/fileproduct/create",
    method: "POST",
    data,
  });
};

const getSaleAccounts = (data) => {
  return axios({
    url: "/telegram/fileproduct/all",
    method: "GET",
  });
};

const deleteSaleAccount = (id) => {
  return axios({
    url: `/telegram/fileproduct/delete/${id}`,
    method: "DELETE",
  });
};

export { createSaleAccount, getSaleAccounts, deleteSaleAccount };
