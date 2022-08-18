import { createSlice } from '@reduxjs/toolkit';

interface HeaderState
{
    navbarOpen: boolean;
    asideOpen: boolean;
    filterOpen: boolean;
}

const initialState: HeaderState =
{
    navbarOpen: false,
    asideOpen: false,
    filterOpen: false
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers:
    {
        toggleNavbar(state)
        {
            state.navbarOpen = !state.navbarOpen;
        },
        toggleAside(state)
        {
            state.asideOpen = !state.asideOpen;
        },
        toggleFilter(state)
        {
            state.filterOpen = !state.filterOpen;
        }
    }
});

export const { toggleNavbar, toggleAside, toggleFilter } = headerSlice.actions;
export default headerSlice.reducer;
