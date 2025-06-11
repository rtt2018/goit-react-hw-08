import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import contactsFilter from "./filters/slice";
import authSlice from './auth/slice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const authPersistConfig = {
    key: 'userToken',
    storage,
    whitelist: ['token'],
};

const persistAuthReducer = persistReducer(authPersistConfig, authSlice)

const rootReducer = combineReducers({
    auth: persistAuthReducer,
    contacts: contactsReducer,
    filters: contactsFilter,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

