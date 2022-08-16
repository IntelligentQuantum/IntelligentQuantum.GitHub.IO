import '../styles/globals.scss';

import { Fragment } from 'react';
import type { AppProps } from 'next/app';

import Aside from '../components/layouts/aside/aside.component';
import Nav from '../components/layouts/nav/nav.component';

function MyApp({ Component, pageProps }: AppProps)
{
    return (
        <Fragment>
            <Aside />
            <Component {...pageProps} />
            <Nav />
        </Fragment>
    );
}

export default MyApp;
