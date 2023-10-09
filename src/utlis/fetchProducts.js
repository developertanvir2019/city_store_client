import axios from "axios";

export const fetchProducts = async (category, title, page) => {
  const response = await axios.get(
    `https://city-server-cwdm.onrender.com/api/product/list`,
    {
      params: { category, title, page },
    }
  );
  return response.data;
};
