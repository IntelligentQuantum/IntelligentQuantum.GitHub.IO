import React from 'react';
import data from '../../assets/data/data.json';

const Error = (props: any) =>
{
    // @ts-ignore
    let { title, description }: string = data[props?.content?.language].error;

    if (props.title)
    {
        title = props.title;
    }
    if (props.description)
    {
        description = props.description;
    }

    return (
        <>
            <main className='error'>
                <div className='error__header'>
                    <h1>
                        {title}
                    </h1>
                    <hr />
                    <p>
                        {description}
                    </p>
                </div>
            </main>
        </>
    );
};

export default Error;
