import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from '../app/store';

interface IPortfolioState
{
    portfolioItem:
        {
            open: boolean,
            image: string | null,
            title: string | null
        };
}

const initialState: IPortfolioState =
    {
        portfolioItem:
            {
                open: false,
                image: null,
                title: null
            }
    };

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers:
        {
            setPortfolioItem(state, action)
            {
                state.portfolioItem = action.payload;
            }
        },
    extraReducers:
        {
            [HYDRATE]: (state, action) =>
            {
                return {
                    ...state,
                    ...action.payload.portoflio,
                };
            }
        }
});

export const { setPortfolioItem } = portfolioSlice.actions;
export const selectPortfolioItem = (state: AppState) => state.portfolio.portfolioItem;

export default portfolioSlice.reducer;
