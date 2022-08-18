import { createSlice } from '@reduxjs/toolkit';

interface HeaderState
{
    navbarOpen: boolean;
    asideOpen: boolean;
}

const initialState: HeaderState =
{
    navbarOpen: false,
    asideOpen: false,
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
        }
    }
});

export const { toggleNavbar, toggleAside } = headerSlice.actions;
export default headerSlice.reducer;
