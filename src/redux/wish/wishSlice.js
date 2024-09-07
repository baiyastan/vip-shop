import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addWish: (state, action) => {
      const findProduct = state.items.find(
        (x) => x.idDrink == action.payload.idDrink
      );

      if (!findProduct) {
        state.items.push(action.payload);
      }
    },

    removeWish: (state, action) => {
      state.items = state.items.filter((x) => x.idDrink != action.payload);
    },

    resetWish: (state) => {
      state.items = [];
    },
  },
});

export const { addWish, removeWish } = wishSlice.actions;
export default wishSlice.reducer;
