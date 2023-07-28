import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import CategoriesSlice from "./slices/categories-slice";
import productDetailsSlice from "./slices/productDetailsSlice";
import productsSlice from "./slices/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    productDetails: productDetailsSlice,
    categories: CategoriesSlice,
    cart: cartSlice,
  },
});
