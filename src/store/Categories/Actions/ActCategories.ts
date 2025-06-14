import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TResponse = { id: number; name: string; img: string; prefix: string }[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5005/category"
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

export { actGetCategories };