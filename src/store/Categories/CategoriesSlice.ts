import { createSlice } from '@reduxjs/toolkit';

interface ICategoryState {
    records: {id:number, name:string, img:string, prefix:string}[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState : ICategoryState = {
    records: [],
    loading: "idle",
    error: null,
}


const CategorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default CategorySlice.reducer;