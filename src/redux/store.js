import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";

const myStore = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default myStore;
