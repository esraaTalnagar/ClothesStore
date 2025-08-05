import type { RootState } from "@store/index";
import { createSelector } from "@reduxjs/toolkit";


const getTotalQuantitySelector = createSelector(
  (state: RootState) => state.Cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, val) => {
      return acc + val;
    }, 0);
    return totalQuantity;
  }
);

export { getTotalQuantitySelector };
