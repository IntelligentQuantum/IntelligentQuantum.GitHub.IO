import { PortfolioActionTypes } from './portfolio.types';

const INITIAL_STATE =
    {
        imagePortfolio: null
    };

export const portfolioReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case PortfolioActionTypes.SET_IMAGE_PORTFOLIO:
            return {
                ...state,
                imagePortfolio: action.payload
            };
        default:
            return state;
    }
};
