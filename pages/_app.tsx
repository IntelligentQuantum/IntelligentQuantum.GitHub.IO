import axios from 'axios';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import store from '../app/store';
import data from '../public/static/data/data.json';

import { setOpenAside } from '../app/aside/aside.actions';
import { setActiveAlert } from '../app/alert/alert.actions';
import { setOpenNavbar } from '../app/navbar/navbar.actions';
import { setActiveFilter } from '../app/filter/filter.actions';
import { setImagePortfolio, setTagPortfolio } from '../app/portfolio/portfolio.actions';

import '../styles/globals.scss';
import stylesNav from '../styles/components/nav.module.scss';
import stylesAlert from '../styles/components/alert.module.scss';
import stylesFilter from '../styles/components/filter.module.scss';
import stylesPortfolio from '../styles/pages/portfolio.module.scss';

const Aside = dynamic(() => import('../components/layouts/aside/aside.component'));
const Navbar = dynamic(() => import('../components/layouts/navbar/navbar.component'));

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000/api/';

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

    const alert = useSelector((state: any) => state.alert.activeFilter);
    const filter = useSelector((state: any) => state.filter.activeFilter);
    const imagePortfolio = useSelector((state: any) => state.portfolio.imagePortfolio);

    const [language, setLanguage] = useState<'en' | 'de' | 'fa'>('en');
    const [theme, setTheme] = useState<'dark' | 'dim' | 'light'>('dim');

    const handleTheme = useCallback(
        (theme?: string) =>
        {
            if (theme && (theme === 'dark' || theme === 'dim' || theme === 'light'))
            {
                const htmlElement: HTMLElement | any = document.querySelector('html');

                localStorage.setItem('theme', theme);
                htmlElement.setAttribute('data-theme', theme);

                setTheme(theme);
            }
            else
            {
                const storageTheme: string = localStorage.getItem('theme') || 'dim';
                const htmlElement: HTMLElement | any = document.querySelector('html');

                if (storageTheme && (storageTheme === 'dark' || storageTheme === 'dim' || storageTheme === 'light'))
                {
                    htmlElement.setAttribute('data-theme', storageTheme);

                    setTheme(storageTheme);
                }
                else
                {
                    htmlElement.setAttribute('data-theme', 'dim');

                    setTheme('dim');
                }
            }
        }, [setLanguage]);
    const handleLanguage = useCallback(
        (language?: string) =>
        {
            if (language && (language === 'en' || language === 'de' || language === 'fa'))
            {
                const htmlElement: HTMLElement | any = document.querySelector('html');

                localStorage.setItem('language', language);
                htmlElement.setAttribute('lang', language);
                htmlElement.setAttribute('data-language', language);
                htmlElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');

                setLanguage(language);
            }
            else
            {
                const storageLanguage: string = localStorage.getItem('language') || 'en';
                const htmlElement: HTMLElement | any = document.querySelector('html');

                htmlElement.setAttribute('lang', storageLanguage);
                htmlElement.setAttribute('data-language', storageLanguage);
                htmlElement.setAttribute('dir', storageLanguage === 'fa' ? 'rtl' : 'ltr');

                if (storageLanguage && (storageLanguage === 'en' || storageLanguage === 'de' || storageLanguage === 'fa'))
                {
                    htmlElement.setAttribute('lang', storageLanguage);
                    htmlElement.setAttribute('data-language', storageLanguage);
                    htmlElement.setAttribute('dir', storageLanguage === 'fa' ? 'rtl' : 'ltr');

                    setLanguage(storageLanguage);
                }
                else
                {
                    htmlElement.setAttribute('lang', 'en');
                    htmlElement.setAttribute('data-language', 'en');
                    htmlElement.setAttribute('dir', 'ltr');

                    setLanguage('en');
                }
            }
        }, [setLanguage]);

    useEffect(() =>
    {
        axios.get('/fingerprint').then(() =>
        { });
    });

    useEffect(() =>
    {
        handleTheme();
        handleLanguage();
    }, [handleLanguage, handleTheme]);

    useEffect(() =>
    {
        dispatch(setTagPortfolio('all'));
        dispatch(setOpenAside(false));
        dispatch(setOpenNavbar(false));
        dispatch(setActiveFilter(false));
        dispatch(setActiveAlert(false, '', ''));
    }, []);

    return (
        <>
            <div>
                <meta property='theme-color' content='#5294E2'/>
                <meta name='language' content='en'/>
                <meta name='Classification' content='Portfolio'/>
                <meta name='subject' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta name='description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio, Full-Stack Developer, Graphic Designer'/>
                <meta name='author' content='im-parsa'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/'/>
                <meta property='og:title' content='im-parsa'/>
                <meta property='og:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/'/>
                <meta property='twitter:title' content='im-parsa'/>
                <meta property='twitter:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta property='twitter:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>
            </div>
            <main className='container'>
                {
                    alert?.status
                        ? (
                            <div className={classnames(stylesAlert.alert, stylesAlert['alert' + alert?.type.charAt(0).toUpperCase() + alert?.type.slice(1)])}>
                                {alert?.message}
                            </div>
                        )
                        : null
                }
                {
                    filter
                        ? <div className={stylesFilter.filter} onClick={() =>
                        {
                            dispatch(setOpenAside(false));
                            dispatch(setOpenNavbar(false));
                            dispatch(setActiveFilter(false));
                        }
                        }/>
                        : null
                }
                {
                    imagePortfolio?.status
                        ? (
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
                        )
                        : null
                }
                <Aside
                    content={data[language]}
                    handleLanguage={handleLanguage}
                />
                <Navbar
                    mobile={true}
                    content={data[language]}
                    handleTheme={handleTheme}
                />
                <Component
                    content={data[language]}
                    {...pageProps}
                />
                <Navbar
                    theme={theme}
                    content={data[language]}
                    handleTheme={handleTheme}
                    page={page === 'contact' || page === 'funny' || page === 'portfolio' || page === 'blogs' || page === 'home' ? page : 'home'}
                />
            </main>
        </>
    );
};

function MyApp({ Component, pageProps }: CustomAppProps)
{
    return (
        <Provider store={store}>
            <AppComponents Component={Component} pageProps={pageProps}/>
        </Provider>
    );
}

export default MyApp;
