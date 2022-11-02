import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from '../app/store';

interface IHeaderState
{
    navbarOpen: boolean;
    asideOpen: boolean;
    filterActive: boolean;
}

const initialState: IHeaderState =
    {
        navbarOpen: false,
        asideOpen: false,
        filterActive: false
    };

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers:
        {
            toggleNavbar(state, action)
            {
                state.navbarOpen = action.payload;
            },
            toggleAside(state, action)
            {
                state.asideOpen = action.payload;
            },
            toggleFilter(state, action)
            {
                state.filterActive = action.payload;
            }
        },
    extraReducers:
        {
            [HYDRATE]: (state, action) =>
            {
                return {
                    ...state,
                    ...action.payload.header,
                };
            }
        }
});

export const { toggleNavbar, toggleAside, toggleFilter } = headerSlice.actions;
export const selectAsideOpen = (state: AppState) => state.header.asideOpen;
export const selectNavbarOpen = (state: AppState) => state.header.navbarOpen;
export const selectFilterActive = (state: AppState) => state.header.filterActive;

export default headerSlice.reducer;
