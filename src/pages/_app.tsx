import axios from 'axios';
import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import { wrapper } from '../store/app/store';

import type { ILanguages } from '../types/language';
import type { IContent } from '../interfaces/content';

import '../styles/globals.scss';

import data from '../../public/static/data/data.json';

const Main = dynamic(() => import('../components/layouts/main/main.component'));

axios.defaults.withCredentials = true;

if (process.env.NODE_ENV === 'development')
    axios.defaults.baseURL = 'http://localhost:3000/api/';

else if (process.env.NODE_ENV === 'production')
    axios.defaults.baseURL = 'https://parsa-firoozi.ir/api/';

const MyApp = ({ Component, pageProps }: AppProps) =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    console.log('%cParsa Firoozi', 'color: #5294e2; padding: .5rem; border-radius: .5rem; background: #383c4a; font-family: sans-serif; font-size: 4.5rem; font-weight: bolder;');

    return (
        <Main content={ content }>
            <Component
                content={ content }
                { ...pageProps }
            />
        </Main>
    );
};

export default wrapper.withRedux(MyApp);
