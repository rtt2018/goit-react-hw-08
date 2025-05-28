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

export const selectNameFilter = (state) => state.filters.name;
export default searchFilter.reducer;
export const { changeFilter } = searchFilter.actions;