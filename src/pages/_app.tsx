import React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { store } from '../redux/app/store';

import '../styles/globals.scss';

import '../utils/axios.util';

const Main = dynamic(() => import('../components/layouts/main/main.component'));

export default function App({ Component, pageProps }: AppProps)
{
    console.log('%cParsa Firoozi', 'color: #5294e2; padding: .5rem; border-radius: .5rem; background: #383c4a; font-family: sans-serif; font-size: 4.5rem; font-weight: bolder;');

    return (
        <Provider store={ store }>
            <Main>
                <Component{ ...pageProps }/>
            </Main>
        </Provider>
    );
};
