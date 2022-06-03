import React from 'react';

import type { IContent } from '../../contracts/IContent';

const Error = (props: { content: IContent, title: string, description: string }) =>
{
    const { title, description }: { title: string, description: string } = props?.content?.error;

    return (
        <>
            <main className='error'>
                <div className='errorHeader'>
                    <h1>
                        { props.title ? props.title : title }
                    </h1>
                    <hr />
                    <p>
                        { props.description ? props.description : description }
                    </p>
                </div>
            </main>
        </>
    );
};

export default Error;
