import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/'


const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = token;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    "auth/register",
    async (values, thunkApi) => {
        try {
            const response = await axios.post("/users/signup", values);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (values, thunkApi) => {
        try {
            const response = await axios.post("/users/login", values);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (token, thunkApi) => {
        try {
            const response = await axios.post('/users/logout');
            clearAuthHeader();
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
        try {
            const reduxState = thunkApi.getState();
            setAuthHeader(`Bearer ${reduxState.auth.token}`);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    },
    {
        condition: (_, thunkApi) => {
            const reduxState = thunkApi.getState();
            return reduxState.auth.token !== null;
        },
    }
);