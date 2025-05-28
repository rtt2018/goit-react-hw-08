import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { createSelector } from 'reselect'
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
    state.loading = true;
    state.error = null;

}

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.error.message;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.rejected, handleRejected)

            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
                state.error = null;
            })

            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
                state.error = null;
            })

            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (contact) => contact.id !== action.payload.id
                );
                state.loading = false;
                state.error = null;
            });
    }
});


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
    (items, name) => {
        if (name === '') {
            return items;
        } else {
            return items.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()))
        }
    }
)

export default contactsSlice.reducer;