import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/'


const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    "auth/register",
    async (_, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", {});
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", {});
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (token, thunkAPI) => {
        try {
            const response = await axios.post('/users/logout', token);
            clearAuthHeader();
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (token, thunkAPI) => {
        try {
            const response = await axios.get('/users/current');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
);