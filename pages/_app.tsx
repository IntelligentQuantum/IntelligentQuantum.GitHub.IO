import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';

import store from '../app/store';

import data from '../assets/data/data.json';

import { setOpenAside } from '../app/aside/aside.actions';
import { setActiveAlert } from '../app/alert/alert.actions';
import { setOpenNavbar } from '../app/navbar/navbar.actions';
import { setActiveFilter } from '../app/filter/filter.actions';
import { setImagePortfolio } from '../app/portfolio/portfolio.actions';

import Aside from '../components/layouts/aside/aside.component';
import Navbar from '../components/layouts/navbar/navbar.component';

import '../assets/styles/globals.scss';

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
    const alert = useSelector(((state: any) => state.alert.activeFilter));
    const filter = useSelector(((state: any) => state.filter.activeFilter));
    const openNavbar: boolean = useSelector(((state: any) => state.navbar.openNavbar));
    const imagePortfolio = useSelector(((state: any) => state.portfolio.imagePortfolio));
    const [language, setLanguage]: [language: 'en' | 'de' | 'fa', setLanguage: any] = useState<any>('en');
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
        handleLanguage();
    }, [handleLanguage]);

    useEffect(() =>
    {
        dispatch(setOpenAside(false));
        dispatch(setOpenNavbar(false));
        dispatch(setActiveFilter(false));
        dispatch(setActiveAlert(false, '', ''));
    }, []);

    return (
            <main className={`container ${openNavbar ? 'navbar-open' : null}`}>
                {
                    alert?.status
                        ?
                        <div className={`alert alert__${alert?.type}`}>
                            {alert?.message}
                        </div>
                        :
                        null
                }
                {
                    filter
                        ?
                        <div className='filter'/>
                        :
                        null
                }
                {
                    imagePortfolio?.status
                        ?
                        <>
                            <div className='filter filter__plus z-index__104'/>
                            <div className='portfolio__image'>
                                <nav>
                                    <div className='nav__mobile--hamburger__open' onClick={() => { dispatch(setImagePortfolio(false));}}>
                                        <div className='nav__mobile--hamburger__open--line'>&nbsp;</div>
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
                />
                <Navbar
                    mobile={true}
                />
                <Component
                    content={data[language]}
                    {...pageProps}
                />
                <Navbar
                    page={router.pathname.split('/')[1] || 'home'}
                    content={data[language]}
                    handleLanguage={handleLanguage}
                />
            </main>
    )
}

export default MyApp;
