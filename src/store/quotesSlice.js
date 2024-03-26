import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: [],
  reducers: {
    addQuote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
