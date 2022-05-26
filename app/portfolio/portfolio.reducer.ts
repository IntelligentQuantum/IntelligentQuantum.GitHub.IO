import { PortfolioActionTypes } from './portfolio.types';

const INITIAL_STATE =
    {
        imagePortfolio: null,
        tagPortfolio: null
    }

export const portfolioReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case PortfolioActionTypes.SET_IMAGE_PORTFOLIO:
            return {
                ...state,
                imagePortfolio: action.payload
            }
        case PortfolioActionTypes.SET_TAG_PORTFOLIO:
            return {
                ...state,
                tagPortfolio: action.payload
            }
        default:
            return state;
    }
}
