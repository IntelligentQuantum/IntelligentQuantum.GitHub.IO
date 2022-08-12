import React from 'react';
import dynamic from 'next/dynamic';

import type { iContent } from '../interfaces/content';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

const Error = dynamic(() => import('../components/error/error.component'));

const ErrorPage = (props: { content: iContent }) =>
{
    return (
        <Error
            title='404'
            description={props?.content?.blog_not_found}
            content={props?.content}
        />
    );
};

export default ErrorPage;
