import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import quotesReducer from "./quotesSlice";
import customersReducer from "./customersSlice";
import alertsReducer from "./alertsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  quotes: quotesReducer,
  customers: customersReducer,
  alerts: alertsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
