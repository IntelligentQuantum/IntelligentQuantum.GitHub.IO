import React from 'react';

import type { IContent } from '../../interfaces/content';

import stylesError from '../../styles/components/error.module.scss';

const Error = (props: { content: IContent, title: string, description: string }) =>
{
    const error = props?.content?.error;

    return (
        <main className={stylesError.error}>
            <div className={stylesError.errorHeader}>
                <h2>
                    { props.title ? props.title : error?.title }
                </h2>

                <hr />

                <p>
                    { props.description ? props.description : error?.description }
                </p>
            </div>
        </main>
    );
};

export default Error;
