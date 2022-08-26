import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import Layout from '../components/layouts/layout.component';

import { store } from '../redux/app/store';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps)
{
    return (
        <Fragment>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </Fragment>
    );
}

export default MyApp;
