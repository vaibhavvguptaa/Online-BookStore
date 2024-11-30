import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/CartSlice";
import ordersApi from "./orders/ordersApi";
import booksApi from "./Features/books/BooksApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
});
