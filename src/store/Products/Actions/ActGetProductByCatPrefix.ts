import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@customTypes/product";


type TResponse = TProduct[];

const actGetProductByCatPrefix = createAsyncThunk(
  "Products/actGetProductByCatPrefix",
  async (prefix: string, thunkAPI) => {
    try {
      const response = await axios.get<TResponse>(
       `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data.message || error.message
        );
      } else {
        return thunkAPI.rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export { actGetProductByCatPrefix };