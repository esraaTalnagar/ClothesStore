import { configureStore , combineReducers } from "@reduxjs/toolkit";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import Categories from "./Categories/CategoriesSlice";
import Products from "./Products/ProductsSlice";
import Cart from "./Cart/CartSlice";
import storage from "redux-persist/lib/storage";




const cartPersistConfig = {
  key: "Cart",
  storage,
  whitelist: ["items"], // Only persist the Cart slice

}
const rootReducer = combineReducers({
  Categories,
  Products,
  Cart: persistReducer(cartPersistConfig, Cart),
});



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store);
export default store;
export { persistor };
