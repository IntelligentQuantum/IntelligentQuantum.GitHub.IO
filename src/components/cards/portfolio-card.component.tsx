import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { BsArrowsFullscreen } from 'react-icons/bs';

import { setImagePortfolio } from '../../app/portfolio/portfolio.actions';

import stylesPortfolio from '../../styles/pages/portfolio.module.scss';

const ItemMotion = dynamic(() => import('../animations/item.component'));
const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

const PortfolioCard = (props: { index: number, text: string, portfolio: { image: string, title: string, tag: string, description: string, link: string }}) =>
{
    const dispatch = useDispatch();

    return (
        <ItemMotion index={ props.index } className={stylesPortfolio.portfolioItem}>
            <Image
                onClick={() =>
                {
                    dispatch(setImagePortfolio(true, props.portfolio.image, props.portfolio.title));
                }}
                src={ props.portfolio.image }
                alt={ props.portfolio.title }
                layout='fill'
            />

            <i onClick={() =>
            {
                dispatch(setImagePortfolio(true, props.portfolio.image, props.portfolio.title));
            }}>
                <BsArrowsFullscreen size={17}/>
            </i>

            <div className={stylesPortfolio.portfolioItemBox}>
                <h2>
                    { props.portfolio.title }
                </h2>

                <p>
                    { props.portfolio.description }
                </p>

                <ButtonSecondary
                    a={ true }
                    link={ props.portfolio.link }
                    text={ props.text}
                />
            </div>
        </ItemMotion>
    );
};

export default PortfolioCard;
