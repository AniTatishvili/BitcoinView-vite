import { configureStore } from "@reduxjs/toolkit";

// slices
import signup from "./slice/auth/signup";

export const store = configureStore({
  reducer: {
    // slices
    signup,
    // api
    // [signupAPI.reducerPath]: signupAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat
      //   signupAPI.middleware,
      (),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
