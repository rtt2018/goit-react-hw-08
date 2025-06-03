import { createSlice } from "@reduxjs/toolkit";

const searchFilter = createSlice({
    name: 'filters',
    initialState: {
        name: ""
    },
    reducers: {
        "changeFilter": (state, actions) => {
            return { ...state, name: actions.payload }
        }
    }
})

export default searchFilter.reducer;
export const { changeFilter } = searchFilter.actions;