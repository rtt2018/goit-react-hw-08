import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import contactsFilter from "./filters/slice";
import authSlice from './auth/slice'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: contactsFilter,
        auth: authSlice,
    },
});


