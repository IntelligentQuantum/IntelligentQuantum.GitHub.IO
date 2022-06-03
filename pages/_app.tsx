import classnames from 'classnames';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';

import store from '../app/store';
import seo from '../assets/data/seo.config';
import data from '../assets/data/data.json';

import { setOpenAside } from '../app/aside/aside.actions';
import { setActiveAlert } from '../app/alert/alert.actions';
import { setOpenNavbar } from '../app/navbar/navbar.actions';
import { setActiveFilter } from '../app/filter/filter.actions';
import { setImagePortfolio, setTagPortfolio } from '../app/portfolio/portfolio.actions';

import Aside from '../components/layouts/aside/aside.component';
import Navbar from '../components/layouts/navbar/navbar.component';

import '../styles/globals.scss';
import stylesNav from '../styles/components/nav.module.scss';
import stylesAlert from '../styles/components/alert.module.scss';
import stylesFilter from '../styles/components/filter.module.scss';
import stylesPortfolio from '../styles/pages/portfolio.module.scss';

interface CustomAppProps
{
    Component: AppProps['Component']
    pageProps: AppProps['pageProps']
}

function MyApp({ Component, pageProps }: CustomAppProps)
{
    return (
        <Provider store={store}>
            <AppProps Component={Component} pageProps={pageProps}/>
        </Provider>
    );
}

function AppProps({ Component, pageProps }: CustomAppProps)
{
    const router = useRouter();
    const dispatch = useDispatch();
    const page = router.pathname.split('/')[1];
    const alert = useSelector(((state: any) => state.alert.activeFilter));
    const filter = useSelector(((state: any) => state.filter.activeFilter));
    const openNavbar: boolean = useSelector(((state: any) => state.navbar.openNavbar));
    const imagePortfolio = useSelector(((state: any) => state.portfolio.imagePortfolio));
    const [theme, setTheme]: [theme: 'dark' | 'dim' | 'light', setTheme: any] = useState<any>('dark');
    const [language, setLanguage]: [language: 'en' | 'de' | 'fa', setLanguage: any] = useState<any>('en');
    const handleTheme = useCallback(
        (theme?: string) =>
        {
            if (theme)
            {
                const htmlElement: HTMLElement | any = document.querySelector('html');

                localStorage.setItem('theme', theme);
                htmlElement.setAttribute('data-theme', theme);

                setTheme(theme);
            }
            else
            {
                const storageTheme: string = localStorage.getItem('theme') || 'dark';
                const htmlElement: HTMLElement | any = document.querySelector('html');

                htmlElement.setAttribute('data-theme', storageTheme);

                setTheme(storageTheme);
            }
        }, [setLanguage]);
    const handleLanguage = useCallback(
        (language?: string) =>
        {
            if (language)
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

                setLanguage(storageLanguage);
            }
        }, [setLanguage]);

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
                <meta property='theme-color' content='#4f40f8'/>
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
                <meta property='og:image' content='https://parsa-firoozi.ir/favicon.png'/>

                <meta property='twitter:card'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/'/>
                <meta property='twitter:title' content='im-parsa'/>
                <meta property='twitter:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta property='twitter:image' content='https://parsa-firoozi.ir/favicon.png'/>
            </div>
            <DefaultSeo
                title = 'This is my title'
                titleTemplate = 'Next SEO | %s'
                {...seo}
            />
            <main className={`container ${openNavbar ? 'navbar-open' : null}`}>
                {
                    alert?.status
                        ?
                        <div className={classnames(stylesAlert.alert, stylesAlert['alert' + alert?.type.charAt(0).toUpperCase() + alert?.type.slice(1)])}>
                            {alert?.message}
                        </div>
                        :
                        null
                }
                {
                    filter
                        ?
                        <div className={stylesFilter.filter}/>
                        :
                        null
                }
                {
                    imagePortfolio?.status
                        ?
                        <>
                            <div className={classnames(stylesFilter.filter, stylesFilter.filterPlus, 'z-index__104')} onClick={() => { dispatch(setImagePortfolio(false)); }}/>
                            <div className={stylesPortfolio.portfolioImage}>
                                <nav>
                                    <div className={stylesNav.navMobileHamburgerOpen} onClick={() => { dispatch(setImagePortfolio(false)); }}>
                                        <div className={stylesNav.navMobileHamburgerOpenLine}>&nbsp;</div>
                                    </div>
                                </nav>
                                <img src={imagePortfolio.image} alt={imagePortfolio.title} onClick={() => { dispatch(setImagePortfolio(false)); }}/>
                            </div>
                        </>
                        :
                        null
                }
                <Aside
                    content={data[language]}
                    handleLanguage={handleLanguage}
                />
                <Navbar
                    mobile={true}
                    content={data[language]}
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
    )
}

export default MyApp;
