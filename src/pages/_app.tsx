import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import Aside from '../components/layouts/aside/aside.component';
import Nav from '../components/layouts/nav/nav.component';

import { store } from '../redux/app/store';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps)
{
    return (
        <Fragment>
            <Provider store={store}>
                <Aside />
                <Component {...pageProps} />
                <Nav />
            </Provider>
        </Fragment>
    );
}

export default MyApp;
