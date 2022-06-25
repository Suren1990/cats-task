import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const CATS_API = 'https://api.thecatapi.com/v1/images/search';

const name = 'cats';

const initialState = {
  cats: [],
  status: 'idle',
  categoryId: 1,
};

export const fetchCats = createAsyncThunk(
  `${name}/fetchCategories`,
  async ({ page, id }) => {
    try {
      const response = await axios.get(`${CATS_API}?limit=10&page=${page}&category_ids=${id}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const catsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.cats = [...state.cats, ...action.payload];
      })
      .addCase(fetchCats.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { setCategoryId } =  catsSlice.actions;

export const selectCats = (state) => state.cats.cats;
export const statusCats = (state) => state.cats.status;
export const categoryId = (state) => state.cats.categoryId;

export default catsSlice.reducer;
