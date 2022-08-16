import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import type { ITheme } from '../interfaces/theme';
import type { IContent } from '../interfaces/content';
import type { ILanguage } from '../interfaces/language';

import store from '../app/store';
import data from '../../public/static/data/data.json';

import { setOpenAside } from '../app/aside/aside.actions';
import { setActiveAlert } from '../app/alert/alert.actions';
import { setOpenNavbar } from '../app/navbar/navbar.actions';
import { setActiveFilter } from '../app/filter/filter.actions';
import { setImagePortfolio } from '../app/portfolio/portfolio.actions';

import '../styles/globals.scss';
import stylesNav from '../styles/components/nav.module.scss';
import stylesAlert from '../styles/components/alert.module.scss';
import stylesFilter from '../styles/components/filter.module.scss';
import stylesPortfolio from '../styles/pages/portfolio.module.scss';

const Main = dynamic(() => import('../components/layouts/main/main.component'));
const Aside = dynamic(() => import('../components/layouts/aside/aside.component'));
const Navbar = dynamic(() => import('../components/layouts/navbar/navbar.component'));

axios.defaults.withCredentials = true;

if (process.env.NODE_ENV === 'development')
    axios.defaults.baseURL = 'http://localhost:3000/api/';

else if (process.env.NODE_ENV === 'production')
    axios.defaults.baseURL = 'https://parsa-firoozi.ir/api/';

interface CustomAppProps
{
    Component: AppProps['Component']
    pageProps: AppProps['pageProps']
}

const AppComponents = ({ Component, pageProps }: CustomAppProps) =>
{
    const router = useRouter();
    const dispatch = useDispatch();

    const page = router.pathname.split('/')[1];

    const [theme, setTheme] = useState<ITheme>('dim');
    const [language, setLanguage] = useState<ILanguage>('en');

    const alert = useSelector((state: any) => state.alert.statusAlert);
    const filter = useSelector((state: any) => state.filter.activeFilter);
    const imagePortfolio = useSelector((state: any) => state.portfolio.imagePortfolio);

    const handleTheme = (themeV?: ITheme) =>
    {
        const storageTheme: string = localStorage.getItem('theme') || 'dim';

        if (themeV)
        {
            setTheme(themeV);
            localStorage.setItem('theme', themeV);
        }
        else
        {
            if (storageTheme === 'dark' || storageTheme === 'dim' || storageTheme === 'light')
            {
                setTheme(storageTheme as ITheme);
                localStorage.setItem('theme', storageTheme);
            }
            else
            {
                setTheme('dim');
                localStorage.setItem('theme', 'dim');
            }
        }
    };
    const handleLanguage = (languageV?: ILanguage) =>
    {
        const storageTheme: string = localStorage.getItem('language') || 'eb';

        if (languageV)
        {
            setLanguage(languageV);
            localStorage.setItem('language', languageV);
        }
        else
        {
            if (storageTheme === 'en' || storageTheme === 'de' || storageTheme === 'fa')
            {
                setLanguage(storageTheme as ILanguage);
                localStorage.setItem('language', storageTheme);
            }
            else
            {
                setLanguage('en');
                localStorage.setItem('language', 'en');
            }
        }
    };

    useEffect(() =>
    {
        axios.get('/fingerprint');
    });

    useEffect(() =>
    {
        handleTheme();
        handleLanguage();
    });

    useEffect(() =>
    {
        dispatch(setOpenAside(false));
        dispatch(setOpenNavbar(false));
        dispatch(setActiveFilter(false));
        dispatch(setActiveAlert(false, '', ''));
    }, [dispatch]);

    useEffect(() =>
    {
        const htmlElement: HTMLElement | null = document.querySelector('html');

        if (htmlElement)
        {
            htmlElement.setAttribute('lang', language);
            htmlElement.setAttribute('data-theme', theme);
            htmlElement.setAttribute('data-language', language);
            htmlElement.setAttribute('dir', (language === 'fa' ? 'rtl' : 'ltr'));
        }
    }, [theme, language]);

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Full-Stack Developer & Graphic Designer</title>

                <meta charSet='UTF-8' />

                <link rel='icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                <link rel='apple-touch-icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                <link rel='manifest' href='https://parsa-firoozi.ir/static/manifest.json'/>

                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='language' content={ language }/>
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

            <main className='container'>
                {
                    !alert.hidden
                        ?
                        <div className={classnames(stylesAlert.alert, stylesAlert['alert' + alert.type.charAt(0).toUpperCase() + alert.type.slice(1)])}>
                            {alert.message}
                        </div>
                        :
                        null
                }
                {
                    filter
                        ?
                        <div
                            className={stylesFilter.filter}
                            onClick={() =>
                            {
                                dispatch(setOpenAside(false));
                                dispatch(setOpenNavbar(false));
                                dispatch(setActiveFilter(false));
                            }}
                        />
                        : null
                }
                {
                    imagePortfolio?.status
                        ?
                        <>
                            <div className={classnames(stylesFilter.filter, stylesFilter.filterPlus, 'z-index__104')} onClick={() =>
                            {
                                dispatch(setImagePortfolio(false));
                            }}/>
                            <div className={stylesPortfolio.portfolioImage}>
                                <nav>
                                    <div className={stylesNav.navMobileHamburgerOpen} onClick={() =>
                                    {
                                        dispatch(setImagePortfolio(false));
                                    }}>
                                        <div className={stylesNav.navMobileHamburgerOpenLine}>&nbsp;</div>
                                    </div>
                                </nav>
                                <Image
                                    onClick={() =>
                                    {
                                        dispatch(setImagePortfolio(false));
                                    }}
                                    src={imagePortfolio.image}
                                    alt={imagePortfolio.title}
                                    layout='fill'
                                />
                            </div>
                        </>
                        :
                        null
                }

                <Aside
                    content={ data[language] as IContent }
                    handleLanguage={ handleLanguage }
                />

                <Navbar
                    mobile={ true }
                    content={ data[language] as IContent }
                    handleTheme={ handleTheme }
                />

                <Main content={ data[language] as IContent }>
                    <Component
                        content={ data[language]}
                        { ...pageProps }
                    />
                </Main>

                <Navbar
                    theme={ theme }
                    content={ data[language] as IContent }
                    handleTheme={ handleTheme }
                    page={ page === 'contact' || page === 'hobbies' || page === 'portfolio' || page === 'blogs' || page === 'home' ? page : 'home' }
                />
            </main>
        </>
    );
};

const MyApp = ({ Component, pageProps }: CustomAppProps) =>
{
    return (
        <Provider store={ store }>
            <AppComponents Component={ Component } pageProps={ pageProps }/>
        </Provider>
    );
};

export default MyApp;
