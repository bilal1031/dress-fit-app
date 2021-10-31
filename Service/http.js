import axios from "axios";

const API_KEY = "https://fakestoreapi.com/";

const get = async (link) => {
  return await axios.get(API_KEY + link);
};

const post = async (data) => {
  return await axios.post(API_KEY, data);
};

const put = () => {};

export default {
  get,
  post,
  put,
};
