import { createSlice } from '@reduxjs/toolkit';
import { actGetProductByCatPrefix } from './Actions/ActGetProductByCatPrefix';
import type { TLoading } from '@customTypes/shared';
import type { TProduct } from '@customTypes/product';

interface IProductState {
    records: TProduct[],
    loading: TLoading;
    error: string | null;
}

const initialState : IProductState = {
    records: [],
    loading: "idle",
    error: null,
}


const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    cleanUp:(state) => {
      state.records = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductByCatPrefix.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
    } );
    builder.addCase(actGetProductByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
}
});

export const { cleanUp } = ProductsSlice.actions;
export { actGetProductByCatPrefix };
export default ProductsSlice.reducer;