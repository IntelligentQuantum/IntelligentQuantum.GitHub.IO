import { useDispatch, useSelector } from 'react-redux';

import ButtonSecondary from '../buttons/secondary-button.component';
import { setImagePortfolio } from '../../app/portfolio/portfolio.actions';

const PortfolioCard = (props: { text: string, portfolio: { image: string, title: string, tag: string, description: string, link: string }}) =>
{
    const dispatch = useDispatch();
    const tagPortfolio = useSelector(((state: any) => state.portfolio.tagPortfolio));

    return (
        tagPortfolio === 'all' || props.portfolio?.tag === tagPortfolio
            ?
            <div className={`portfolio__item--card portfolio__item active ${props.portfolio?.tag}`}>
                <img src={props.portfolio?.image} alt={props.portfolio?.title}/>
                <i className='bi-arrows-fullscreen' onClick={() => { dispatch(setImagePortfolio(true, props.portfolio?.image, props.portfolio?.title)) }}/>
                <div className='portfolio__item--box'>
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
