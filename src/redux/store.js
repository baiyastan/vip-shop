import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import wishReducer from "./wish/wishSlice";

const myStore = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishReducer,
  },
});

export default myStore;
