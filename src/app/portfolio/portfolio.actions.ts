import { PortfolioActionTypes } from './portfolio.types';

export const setImagePortfolio = (status: boolean, image?: string, title?: string) =>
    ({
        type: PortfolioActionTypes.SET_IMAGE_PORTFOLIO,
        payload:
            {
                status,
                image,
                title
            }
    });

export const setTagPortfolio = (tag: boolean | string) =>
    ({
        type: PortfolioActionTypes.SET_TAG_PORTFOLIO,
        payload: tag
    });