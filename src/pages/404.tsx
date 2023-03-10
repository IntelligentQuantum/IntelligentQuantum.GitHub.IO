import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import type { ILanguages } from '../interfaces/language';
import type { IContent } from '../interfaces/content';

import data from '../../public/static/data/data.json';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

const Error = dynamic(() => import('../components/error/error.component'));

const ErrorPage = () =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    return (
        <Error
            title='404'
            description={ content.blog_not_found }
        />
    );
};

export default ErrorPage;
