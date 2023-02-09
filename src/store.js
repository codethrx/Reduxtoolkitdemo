import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, japiSlice, productSlice } from "./features/api/apiSlice";
console.log(productSlice.middleware);
console.log(japiSlice.middleware);
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [japiSlice.reducerPath]: japiSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productSlice.middleware)
      .concat(apiSlice.middleware)
      .concat(japiSlice.middleware),
});
