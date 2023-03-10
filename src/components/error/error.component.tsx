import { useRouter } from 'next/router';
import React from 'react';

import type { IContent } from '../../interfaces/content';
import type { ILanguages } from '../../interfaces/language';

import stylesError from '../../styles/components/error.module.scss';

import data from '../../../public/static/data/data.json';

type Props =
    {
        title?: string,
        description?: string
    };

const Error = ({ title, description }: Props) =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;
    const error = content.error.not_found;

    return (
        <section className={stylesError.error}>
            <div className={stylesError.errorHeader}>
                <h2>
                    { title ? title : error.title }
                </h2>
                <hr />
                <p>
                    { description ? description : error.description }
                </p>
            </div>
        </section>
    );
};

export default Error;
