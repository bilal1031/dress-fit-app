import http from "./http";

const getAllCategory = async () => {
  let data = [];
  try {
    const res = await http.get("products/categories");
    return (data = res.data);
  } catch (ex) {
    console.log(ex);
  }
};
const getAllProducts = async () => {
  let data = [];
  try {
    const res = await http.get("products");
    return (data = res.data);
  } catch (ex) {
    console.log(ex);
  }
};
export default {
  getAllCategory,
  getAllProducts,
};
