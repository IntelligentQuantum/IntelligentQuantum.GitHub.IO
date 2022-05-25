import '../assets/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useCallback, useEffect, useState } from 'react';

import data from '../assets/data/data.json';

import Aside from '../components/aside/aside.component';
import Navbar from '../components/navbar/navbar.component';

function MyApp({ Component, pageProps }: AppProps)
{
    const [language, setLanguage]: [Language: 'en' | 'gr' | 'pr', SetLanguage: any] = useState('en');
    const languageHandle = useCallback(
        () =>
        {
            setLanguage(localStorage.getItem('language'))
        }, [setLanguage]);

    useEffect(() =>
    {
        languageHandle();
    }, [languageHandle]);

    return (
        <main className='container'>
            <div className='filter' />
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
                page={'home'}
                content={data[language]}
                handleLanguage={languageHandle}
            />
        </main>
    );
}

export default MyApp;
