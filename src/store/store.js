import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quotesSlice";
import customersReducer from "./customerSlice";
import alertsReducer from "./alertsSlice";

export const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    customers: customersReducer,
    alerts: alertsReducer,
  },
});
