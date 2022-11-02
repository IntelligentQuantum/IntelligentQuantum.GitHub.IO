import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { headerSlice } from '../features/header-slice';
import { portfolioSlice } from '../features/portfolio-slice';

const makeStore = () =>
    configureStore({
        reducer:
            {
                [headerSlice.name]: headerSlice.reducer,
                [portfolioSlice.name]: portfolioSlice.reducer,
            },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production'
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
