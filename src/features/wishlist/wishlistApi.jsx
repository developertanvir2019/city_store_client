// wishlistApi.js

import axios from "axios";

const baseURL = "https://city-server-cwdm.onrender.com/api";

export const getWishlist = async (email) => {
  const response = await axios.get(`${baseURL}/wishlist/user/${email}`);
  return response.data;
};
