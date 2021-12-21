import React from "react";
import { Helmet } from "react-helmet";
import data from '../../Assets/Data/data.json';

const Error = (props: any) =>
{
    // @ts-ignore
    let { title, description }: string = data[props.content.language].error;

    if (props.title)
    {
        title = props.title;
    }
    if (props.description)
    {
        description = props.description;
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title> Parsa Firoozi &mdash; {title} </title>
                <meta property="theme-color" content="#4f40f8"/>
                <meta name="language" content="FA"/>
                <meta name="Classification" content="Tutorials"/>
                <meta name="subject" content={description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content={description}/>
                <meta name="keywords" content={description}/>
                <meta name="author" content="Parsa Firoozi"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://parsa-firoozi.ir/"/>
                <meta property="og:title" content="Parsa Firoozi"/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content="https://parsa-firoozi.ir/favicon.png"/>
                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:url" content="https://parsa-firoozi.ir/"/>
                <meta property="twitter:title" content="Parsa Firoozi"/>
                <meta property="twitter:description" content={description}/>
                <meta property="twitter:image" content="%PUBLIC_URL%/favicon.png"/>
            </Helmet>

            <main className="error">
                <div className="error__header">
                    <h1>
                        {title}
                    </h1>
                    <hr />
                    <p>
                        {description}
                    </p>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Error;
