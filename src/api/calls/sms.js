import axios from "axios";

const getSms = () => {
  return axios({
    url: "/telegram/sms/all",
    method: "GET",
  });
};

export { getSms };
