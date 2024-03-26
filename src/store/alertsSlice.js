import { createSlice } from "@reduxjs/toolkit";

export const alertsSlice = createSlice({
  name: "alerts",
  initialState: [],
  reducers: {
    addAlert: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
