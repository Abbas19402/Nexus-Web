import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Reducers/Auth/authReducer";
import layoutReducer from "./Reducers/LayoutSwitch";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    auth: authReducer,
    layoutSwitch: layoutReducer
})

const persistedReducer = persistReducer(persistConfig,reducer);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
})

export default Store;