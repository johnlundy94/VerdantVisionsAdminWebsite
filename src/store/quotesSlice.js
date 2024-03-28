import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addAlert } from "./alertsSlice";

const apiGatewayUrl = process.env.REACT_APP_API_GATEWAY_URL;

export const fetchQuotes = createAsyncThunk(
  "quotes/getQuotes",
  async (_, { dispatch, getState }) => {
    try {
      const response = await fetch(apiGatewayUrl);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const quotes = await response.json();

      const stateQuotes = getState().quotes;
      const newQuotes = quotes.filter(
        (quote) => !stateQuotes.some((stateQuote) => stateQuote.id === quote.id)
      );

      newQuotes.forEach((quote) => {
        dispatch(
          addAlert({ message: `New quote received from ${quote.name}` })
        );
      });

      return newQuotes;
    } catch (error) {
      console.error("Failed to fetch quotes", error);
      return [];
    }
  }
);

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: [],
  reducers: {
    addQuote: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      action.payload.forEach((quote) => {
        if (!state.some((stateQuote) => stateQuote.id === quote.id)) {
          state.push(quote);
        }
      });
    });
  },
});

export const { addQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
