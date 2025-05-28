import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import contactsFilter from "./filtersSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: contactsFilter
    },

});


