import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const CATEGORIES_API = 'https://api.thecatapi.com/v1/categories';

const name = 'catsCategory';

const initialState = {
  categories: [],
  status: 'idle',
};

export const fetchCategories = createAsyncThunk(
  `${name}/fetchCategories`,
  async () => {
    try {
      const response = await axios.get(CATEGORIES_API);
      return response.data
    } catch (err) {
      // console.log(err.message);
      return err.message;
    }
  }
);

export const categoriesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const selectCategories = (state) => state.categories.categories;
export const statusCategories = (state) => state.categories.status;

export default categoriesSlice.reducer;
