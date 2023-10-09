// wishlistApi.js

import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const getWishlist = async (email) => {
  const response = await axios.get(`${baseURL}/wishlist/user/${email}`);
  return response.data;
};
