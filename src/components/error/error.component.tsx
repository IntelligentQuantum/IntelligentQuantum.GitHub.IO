import React from 'react';

import type { iContent } from '../../interfaces/content';

import stylesError from '../../styles/components/error.module.scss';

const Error = (props: { content: iContent, title: string, description: string }) =>
{
    const error = props.content.error.not_found;

    return (
        <section className={stylesError.error}>
            <div className={stylesError.errorHeader}>
                <h2>
                    { props.title ? props.title : error.title }
                </h2>

                <hr />

                <p>
                    { props.description ? props.description : error.description }
                </p>
            </div>
        </section>
    );
};

export default Error;
