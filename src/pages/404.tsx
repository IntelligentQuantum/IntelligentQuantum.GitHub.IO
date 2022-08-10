import React from 'react';
import dynamic from 'next/dynamic';

import type { IContent } from '../interfaces/content';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

import stylesMain from '../styles/components/main.module.scss';

const Error = dynamic(() => import('../components/error/error.component'));
const Main = dynamic(() => import('../components/layouts/main/main.component'));

const ErrorPage = (props: { content: IContent }) =>
{
    return (
        <Main content={props?.content}>
            <div className={stylesMain.mainContent}>
                <div className={stylesMain.mainBackground}/>
                <Error
                    title='404'
                    description={props?.content?.blog_not_found}
                    content={props?.content}
                />
                <div className='hr'/>
            </div>
        </Main>
    );
};

export default ErrorPage;
