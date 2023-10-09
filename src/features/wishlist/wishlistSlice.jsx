/* eslint-disable no-useless-catch */
// wishlistSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWishlist } from "./wishlistApi";

const initialState = {
  wishlist: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (email) => {
    try {
      const wishlist = await getWishlist(email);
      return wishlist;
    } catch (error) {
      throw error;
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlist = action.payload;
        state.error = null;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.wishlist = [];
        state.isError = true;
        state.error = action.error?.message || "An error occurred.";
      });
  },
});

export default wishlistSlice.reducer;
