import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import allReducer from "../redux/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducer);

export const store = createStore(allReducer);
// export const persistor = persistStore(store);
