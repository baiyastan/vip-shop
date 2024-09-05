import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {},
});

export const {} = wishSlice.actions;
export default wishSlice.reducer;
