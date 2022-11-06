import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filterLoadingStatus: 'idle',
    activeFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterFetching: state => {state.filterLoadingStatus = 'loading'},
        filterFetched: (state,  action) => {
            state.filterLoadingStatus = 'loading'
            state.filters = action.payload
        },
        filterFetchingError: state => {state.filterLoadingStatus = 'error'},
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload
        }
    }
})

const {actions, reducer} = filtersSlice

export default reducer
export const {
    filterFetching,
    filterFetched,
    filterFetchingError,
    activeFilterChanged
} = actions