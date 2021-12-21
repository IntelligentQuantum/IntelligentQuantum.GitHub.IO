import React  from "react";
import Data from "../../../Assets/Data/data.json";
import Card from "./Card.component";
import { Helmet } from "react-helmet";

const Funny = (props: any) =>
{
    let Language: "en" | "gr" | "pr" = props.content.language;
    let Facts = Data[Language].myFunny.map((fact: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    fact={fact}
                />
            );
        }
    )

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title> Parsa Firoozi &mdash; Funny Time </title>
                <meta property="theme-color" content="#4f40f8"/>
                <meta name="language" content={Language}/>
                <meta name="Classification" content="Funny Time"/>
                <meta name="subject" content="Funny"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Parsa Firoozi Funny Time"/>
                <meta name="keywords" content="im-parsa, Parsa Firoozi, Parsa, Firoozi, Funny Time"/>
                <meta name="author" content="Parsa Firoozi"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://parsa-firoozi.ir/funny"/>
                <meta property="og:title" content="Parsa Firoozi"/>
                <meta property="og:description" content="Parsa Firoozi Funny Time"/>
                <meta property="og:image" content="https://parsa-firoozi.ir/favicon.png"/>
                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:url" content="https://parsa-firoozi.ir/funny"/>
                <meta property="twitter:title" content="Parsa Firoozi"/>
                <meta property="twitter:description" content="Parsa Firoozi Funny Time"/>
                <meta property="twitter:image" content="%PUBLIC_URL%/favicon.png"/>
            </Helmet>

            <div className="main__content">
                <div className="main__background"/>
                <div className="hr"/>
                <section className="funny">
                    <h4 className="heading">{props.content.titles[5]}</h4>
                    {Facts}
                </section>
                <div className="hr"/>
            </div>
        </React.Fragment>
    );
};

export default Funny;
