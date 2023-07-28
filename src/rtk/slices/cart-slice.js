import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

export const cartSlice = createSlice({
  initialState: items,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.push(newProduct);
      }
    },
    reduceProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, removeFromCart, reduceProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
