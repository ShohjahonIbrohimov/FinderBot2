import axios from "axios";

const checkPayment = (data) => {
  return axios({
    url: "/offers/qiwi/check/payment",
    method: "POST",
    data,
  });
};

const getPayments = () => {
  return axios({
    url: "https://api.g-obox.ru/offers/qiwi/pay/all",
    method: "GET",
  });
};

const payPayment = (data) => {
  return axios({
    url: "https://api.g-obox.ru/offers/create/pay/qiwi",
    method: "POST",
    data,
  });
};

export { checkPayment, getPayments, payPayment };
