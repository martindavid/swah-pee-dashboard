import axios from "axios";

const API_ROOT = "https://swapi.co/api";

const responseBody = res => {
  console.log(res);
  return res.data;
};

const requests = {
  get: url => axios.get(`${API_ROOT}${url}`).then(responseBody),
  getDetail: url => axios.get(url).then(responseBody)
};

const API = {
  all: part => requests.get(`/${part}/`),
  detail: url => requests.getDetail(url)
};

export default {
  API
};
