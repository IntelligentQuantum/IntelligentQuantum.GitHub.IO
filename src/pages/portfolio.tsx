import Head from 'next/head';
import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import type { IContent } from '../interfaces/content';
import type { IPortfolio } from '../interfaces/portfolio';

import stylesPortfolio from '../styles/pages/portfolio.module.scss';

const ItemMotion = dynamic(() => import('../components/animations/item.component'));
const ScrollMotion = dynamic(() => import('../components/animations/scroll.component'));
const PortfolioCard = dynamic(() => import('../components/cards/portfolio-card.component'));

const Portfolio = (props: { content: IContent }) =>
{
    const [category, setCategory] = useState<string>('all');

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Resume and complete portfolio of im-parsa</title>

                <meta name='Classification' content='Portfolio'/>
                <meta name='subject' content='Portfolio'/>
                <meta name='description' content='Parsa Firoozi Portfolio'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/portfolio'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Portfolio'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/portfolio'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Portfolio'/>
            </Head>

            <section className={stylesPortfolio.portfolio}>
                <h4 className='heading'>
                    {props.content.titles[6]}
                </h4>

                <ScrollMotion>
                    <ul className='heading__small'>
                        <ItemMotion index={ 0 } data-active={category === 'all'} onClick={() => setCategory('all')}>
                            {props.content.categories[0]}
                        </ItemMotion>
                        <ItemMotion index={ 1 } data-active={category === 'web_development'} onClick={() => setCategory('web_development')}>
                            {props.content.categories[1]}
                        </ItemMotion>
                        <ItemMotion index={ 2 } data-active={category === 'app_development'} onClick={() => setCategory('app_development')}>
                            {props.content.categories[2]}
                        </ItemMotion>
                        <ItemMotion index={ 3 } data-active={category === 'robot_development'} onClick={() => setCategory('robot_development')}>
                            {props.content.categories[3]}
                        </ItemMotion>
                        <ItemMotion index={ 4 } data-active={category === 'graphic_design'} onClick={() => setCategory('graphic_design')}>
                            {props.content.categories[4]}
                        </ItemMotion>
                    </ul>
                </ScrollMotion>

                <ScrollMotion delay={ .3 } className={stylesPortfolio.portfolioList}>
                    {
                        props.content.my_portfolio.map((portfolio: IPortfolio) =>
                            (
                                category === 'all' || portfolio.tag === category
                                    ?
                                    <PortfolioCard
                                        key={ nanoid() }
                                        portfolio={ portfolio }
                                        text={ props.content.read_more }
                                    />
                                    :
                                    null
                            ))
                    }
                </ScrollMotion>
            </section>
        </>
    );
};

export default Portfolio;
