import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TResponse = { id: number; name: string; img: string; prefix: string }[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, { thunkAPI }) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("http://localhost:5005/category");
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(
              error.response?.data.message || error.message
            );
        } else {
            return rejectWithValue("An unexpected error occurred");
        }
    }
  }
);

export { actGetCategories };