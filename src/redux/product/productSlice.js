import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action) => {
      console.log(action);
      state.list = action.payload;
      state.loading = false;
    },
    fetchProductError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductStart, fetchProductSuccess, fetchProductError } =
  productSlice.actions;
export default productSlice.reducer;
