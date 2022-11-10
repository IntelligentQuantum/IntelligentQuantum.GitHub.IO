import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import React, { ReactNode, useEffect, Fragment } from 'react';

import type { IContent } from '../../../interfaces/content';

import stylesNav from '../../../styles/components/nav.module.scss';
import stylesMain from '../../../styles/components/main.module.scss';
import stylesAlert from '../../../styles/components/alert.module.scss';
import stylesFilter from '../../../styles/components/filter.module.scss';
import stylesPortfolio from '../../../styles/pages/portfolio.module.scss';

import { selectPortfolioItem, setPortfolioItem } from '../../../store/features/portfolio-slice';
import { selectFilterActive, toggleAside, toggleFilter, toggleNavbar } from '../../../store/features/header-slice';

const Aside = dynamic(() => import('../aside/aside.component'));
const Navbar = dynamic(() => import('../navbar/navbar.component'));
const Footer = dynamic(() => import('../footer/footer.component'));

const Main = (props: { content: IContent, children: ReactNode }) =>
{
    const dispatch = useDispatch();

    const filterActive = useSelector(selectFilterActive);
    const portfolioItem = useSelector(selectPortfolioItem);

    useEffect(() =>
    {
        axios.get('/fingerprint');
    });

    return (
        <Fragment>
            <Head>
                <title>Parsa Firoozi &mdash; Full-Stack Developer & Graphic Designer</title>

                <meta charSet='UTF-8' />

                <link rel='icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                <link rel='apple-touch-icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                <link rel='manifest' href='https://parsa-firoozi.ir/static/manifest.json'/>

                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='language' content={ props.content.language }/>
                <meta name='Classification' content='Portfolio'/>
                <meta name='subject' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta name='description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio, Full-Stack Developer, Graphic Designer'/>
                <meta name='author' content='Parsa Firoozi'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

                <meta property='theme-color' content='#5294E2'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta property='twitter:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>
            </Head>
            {
                filterActive
                    ?
                    <span
                        className={stylesFilter.filter}
                        onClick={() =>
                        {
                            dispatch(toggleAside(false));
                            dispatch(toggleNavbar(false));
                            dispatch(toggleFilter(false));
                            dispatch(setPortfolioItem(false));
                        }}
                    />
                    : null
            }
            {
                portfolioItem.open && portfolioItem.image && portfolioItem.title
                    ?
                    <Fragment>
                        <div className={classnames(stylesFilter.filter, stylesFilter.filterPlus, 'z-index__104')} onClick={() => dispatch(setPortfolioItem(false))}/>
                        <div className={stylesPortfolio.portfolioImage}>
                            <nav>
                                <div className={stylesNav.navMobileHamburgerOpen} onClick={() => dispatch(setPortfolioItem(false))}>
                                    <div className={stylesNav.navMobileHamburgerOpenLine}>&nbsp;</div>
                                </div>
                            </nav>
                            <Image
                                onClick={() => dispatch(setPortfolioItem(false))}
                                src={ portfolioItem.image }
                                alt={ portfolioItem.title }
                                layout='fill'
                            />
                        </div>
                    </Fragment>
                    : null
            }

            <Aside
                content={ props.content }
            />
            <Navbar
                mobile={ true }
                content={ props.content }
            />
            <Navbar
                content={ props.content }
            />
            <main className={stylesMain.main}>
                <Link href='/blogs/mahsa_amini' legacyBehavior>
                    <a className={stylesAlert.alert}>
                        { props.content.alert }
                    </a>
                </Link>
                <div className={stylesMain.mainContent}>
                    <span className={stylesMain.mainBackground}/>
                    { props.children }
                </div>
                <Footer content={ props.content }/>
            </main>
        </Fragment>
    );
};

export default Main;
