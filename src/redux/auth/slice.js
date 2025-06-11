import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";
// import { clearContacts } from '../contacts/operations'

// const handlePending = (state) => {
// }

// const handleRejected = (state, action) => {
// }

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },

    extraReducers: (builder) => {
        builder

            // .addCase(register.pending, handlePending)
            // .addCase(register.rejected, handleRejected)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })

            // .addCase(login.pending, handlePending)
            // .addCase(login.rejected, handleRejected)
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })

            // .addCase(logout.pending, handlePending)
            // .addCase(logout.rejected, handleRejected)
            .addCase(logout.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })

            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
            })
            .addCase(refreshUser.pending, (state, action) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            });;
    }
});


export default authSlice.reducer;