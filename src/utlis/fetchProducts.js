import axios from "axios";

export const fetchProducts = async (category, title, page) => {
  const response = await axios.get(`http://localhost:5000/api/product/list`, {
    params: { category, title, page },
  });
  return response.data;
};
