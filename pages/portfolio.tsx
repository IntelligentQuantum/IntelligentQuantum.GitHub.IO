import Head from 'next/head';
import {useDispatch} from 'react-redux';

import type { NextPage } from 'next';

import Card from '../components/portfolio/card.component';
import Main from '../components/layouts/main/main.component';

import stylesMain from '../styles/components/main.module.scss';
import stylesPortfolio from '../styles/pages/portfolio.module.scss';

import { setTagPortfolio } from '../app/portfolio/portfolio.actions';

const Portfolio: NextPage = (props: any) =>
{
    const dispatch = useDispatch();
    const cards = props?.content?.my_portfolio?.map((portfolio: any) =>
        (
            <Card
                key={ portfolio?.name?.split(' ').join('_') }
                portfolio={ portfolio }
                text={ props?.content?.read_more }
            />
        )
    );

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Resume and complete portfolio of im-parsa</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='Classification' content='Portfolio'/>
                <meta name='subject' content='Portfolio'/>
                <meta name='description' content='Parsa Firoozi Portfolio'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/portfolio'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Portfolio'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/portfolio'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Portfolio'/>
            </Head>
            <Main content={props?.content}>
                <div className={stylesMain.mainContent}>
                    <div className={stylesMain.mainBackground}/>
                    <div className='hr'/>
                    <section className={stylesPortfolio.portfolio}>
                        <ul className='heading__small'>
                            <li className={stylesPortfolio.portfolioItemCard} onClick={() => { dispatch(setTagPortfolio('all')) }}>
                                {props?.content?.categories[0]}
                            </li>
                            <li className={stylesPortfolio.portfolioItemCard} onClick={() => { dispatch(setTagPortfolio('web_development')) }}>
                                {props?.content?.categories[1]}
                            </li>
                            <li className={stylesPortfolio.portfolioItemCard} onClick={() => { dispatch(setTagPortfolio('app_development')) }}>
                                {props?.content?.categories[2]}
                            </li>
                            <li className={stylesPortfolio.portfolioItemCard} onClick={() => { dispatch(setTagPortfolio('robot_development')) }}>
                                {props?.content?.categories[3]}
                            </li>
                            <li className={stylesPortfolio.portfolioItemCard} onClick={() => { dispatch(setTagPortfolio('graphic_design')) }}>
                                {props?.content?.categories[4]}
                            </li>
                        </ul>
                        <div className={stylesPortfolio.portfolioList}>
                            { cards }
                        </div>
                    </section>
                    <div className='hr'/>
                </div>
            </Main>
        </>
    )
}

export default Portfolio;
