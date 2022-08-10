import { combineReducers } from 'redux';

import { asideReducer } from './aside/aside.reducer';
import { alertReducer } from './alert/alert.reducer';
import { navbarReducer } from './navbar/navbar.reducer';
import { filterReducer } from './filter/filter.reducer';
import { portfolioReducer } from './portfolio/portfolio.reducer';

export default combineReducers(
    {
        aside: asideReducer,
        alert: alertReducer,
        filter: filterReducer,
        navbar: navbarReducer,
        portfolio: portfolioReducer
    });
