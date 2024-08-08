import { configureStore } from "@reduxjs/toolkit";

// slices
import signup from "./slice/auth/signup";

import user_dashboard_slice from "./slice/dashboard/user-dashboard-slice";

export const store = configureStore({
  reducer: {
    // slices
    signup,
    user_dashboard_slice,
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
