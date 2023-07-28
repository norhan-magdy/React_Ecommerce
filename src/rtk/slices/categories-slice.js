import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "productsSlice/fetchCategories",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  }
);
const categoriesSlice = createSlice({
  initialState: [],
  name: "categoriesSlice",
  reducers: {
    // getInCategory: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
