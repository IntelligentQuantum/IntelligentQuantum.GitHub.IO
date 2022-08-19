import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { BsArrowsFullscreen } from 'react-icons/bs';

import { setPortfolioItem } from '../../store/features/portfolio-slice';

import stylesPortfolio from '../../styles/pages/portfolio.module.scss';

const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

const PortfolioCard = (props: { text: string, portfolio: { image: string, title: string, tag: string, description: string, link: string }}) =>
{
    const dispatch = useDispatch();

    return (
        <div className={stylesPortfolio.portfolioItem}>
            <Image
                onClick={() => dispatch(setPortfolioItem({ open: true, image: props.portfolio.image, title: props.portfolio.title }))}
                src={ props.portfolio.image }
                alt={ props.portfolio.title }
                layout='fill'
            />

            <i onClick={() => dispatch(setPortfolioItem({ open: true, image: props.portfolio.image, title: props.portfolio.title }))}>
                <BsArrowsFullscreen size={17}/>
            </i>

            <div className={stylesPortfolio.portfolioItemBox}>
                <h2>{ props.portfolio.title }</h2>
                <p>{ props.portfolio.description }</p>
                <ButtonSecondary
                    a={ true }
                    link={ props.portfolio.link }
                    text={ props.text}
                />
            </div>
        </div>
    );
};

export default PortfolioCard;
