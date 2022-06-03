import { useDispatch, useSelector } from 'react-redux';

import ButtonSecondary from '../buttons/secondary-button.component';
import { setImagePortfolio } from '../../app/portfolio/portfolio.actions';

import stylesPortfolio from '../../styles/pages/portfolio.module.scss';

import ArrowsFullscreen from '../../assets/icons/icon-arrows_fullscreen.svg';

const PortfolioCard = (props: { text: string, portfolio: { image: string, title: string, tag: string, description: string, link: string }}) =>
{
    const dispatch = useDispatch();
    const tagPortfolio = useSelector(((state: any) => state.portfolio.tagPortfolio));

    return (
        tagPortfolio === 'all' || props.portfolio?.tag === tagPortfolio
            ?
            <div className={stylesPortfolio.portfolioItem}>
                <img src={props.portfolio?.image} alt={props.portfolio?.title} />
                <ArrowsFullscreen onClick={() => { dispatch(setImagePortfolio(true, props.portfolio?.image, props.portfolio?.title)) }} />
                <div className={stylesPortfolio.portfolioItemBox}>
                    <h2>
                        {props.portfolio?.title}
                    </h2>
                    <p>
                        {props.portfolio?.description}
                    </p>
                    <ButtonSecondary
                        a={true}
                        link={props.portfolio?.link}
                        text={props.text}
                    />
                </div>
            </div>
            :
            null
    );
};

export default PortfolioCard;
