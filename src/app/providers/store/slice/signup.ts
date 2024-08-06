import { createSlice } from "@reduxjs/toolkit";

export const signup = createSlice({
  name: "signup",
  initialState: {
    data: {},
  },
  reducers: {
    setUpdateUserData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setUpdateUserData } = signup.actions;
export default signup.reducer;
