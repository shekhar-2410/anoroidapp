import { configureStore } from "@reduxjs/toolkit";
import ProdcutReducer from "./ProductSlice";
export const store = configureStore({
  reducer: {
    product: ProdcutReducer,
   
  },
});
