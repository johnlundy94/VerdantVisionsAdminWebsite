import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: [
    {
      name: "",
      email: "",
      phone: "",
      address: "",
      services: {
        landscapeDesign: false,
        outdoorLivingSpaces: false,
        irrigation: false,
      },
      budget: "",
      description: "",
    },
  ],
  reducers: {
    addQuote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
