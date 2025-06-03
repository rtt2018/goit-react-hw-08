import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, clearContacts } from "./operations";

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
            })

            .addCase(clearContacts, (state, action) => {
                state.items = [];
            });
    }
});




export default contactsSlice.reducer;