import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "ProductDetailsSlice/fetchProduct",
  async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products${productId}`);
    const data = await res.json();
    return data;
  }
);
const ProductDetailsSlice = createSlice({
  initialState: [],
  name: "ProductDetailsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {} = ProductDetailsSlice.actions;
export default ProductDetailsSlice.reducer;
