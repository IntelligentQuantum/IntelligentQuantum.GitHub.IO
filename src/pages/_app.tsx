import React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import type { ILanguages } from '../types/language';
import type { IContent } from '../interfaces/content';

import { store } from '../redux/app/store';

import '../styles/globals.scss';

import '../utils/axios.util';

import data from '../../public/static/data/data.json';

const Main = dynamic(() => import('../components/layouts/main/main.component'));

export default function App({ Component, pageProps }: AppProps)
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    console.log('%cParsa Firoozi', 'color: #5294e2; padding: .5rem; border-radius: .5rem; background: #383c4a; font-family: sans-serif; font-size: 4.5rem; font-weight: bolder;');

    return (
        <Provider store={store}>
            <Main>
                <Component{ ...pageProps }/>
            </Main>
        </Provider>
    );
};
