import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Card from './card.component';

import data from '../../assets/data/data.json';

import { setTagPortfolio } from '../../app/portfolio/portfolio.actions';

const Portfolio = (props: any) =>
{
    const dispatch = useDispatch();
    const cards = props?.content?.my_portfolio?.map((portfolio: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    portfolio={ portfolio }
                    text={ props?.content?.read_more }
                />
            );
        }
    )

    useEffect(() =>
    {
        dispatch(setTagPortfolio('all'));
    }, []);

    return (
        <>
            <div className='main__content'>
                <div className='main__background'/>
                <div className='hr'/>
                <section className='portfolio'>
                    <ul className='heading__small'>
                        <li className='portfolio__item--card active' onClick={() => { dispatch(setTagPortfolio('all')) }}>
                            {props?.content?.categories[0]}
                        </li>
                        <li className='portfolio__item--card' onClick={() => { dispatch(setTagPortfolio('web_development')) }}>
                            {props?.content?.categories[1]}
                        </li>
                        <li className='portfolio__item--card' onClick={() => { dispatch(setTagPortfolio('app_development')) }}>
                            {props?.content?.categories[2]}
                        </li>
                        <li className='portfolio__item--card' onClick={() => { dispatch(setTagPortfolio('robot_development')) }}>
                            {props?.content?.categories[3]}
                        </li>
                        <li className='portfolio__item--card' onClick={() => { dispatch(setTagPortfolio('graphic_design')) }}>
                            {props?.content?.categories[4]}
                        </li>
                    </ul>
                    <div className='portfolio__items'>
                        { cards }
                    </div>
                </section>
                <div className='hr'/>
            </div>
        </>
    );
};

export default Portfolio;
