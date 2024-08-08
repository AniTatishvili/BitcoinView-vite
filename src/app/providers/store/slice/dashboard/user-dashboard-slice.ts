import { createSlice } from "@reduxjs/toolkit";

const user_dashboard_slice = createSlice({
  name: "user_dashboard_slice",
  initialState: {
    user_dashboard_menu_visibility: null,
  },
  reducers: {
    userDashboardMenuVisibilityStatus: (state, action) => {
      state.user_dashboard_menu_visibility = action.payload;
    },
  },
});

const { reducer, actions } = user_dashboard_slice;

export const { userDashboardMenuVisibilityStatus } = actions;
export default reducer;
