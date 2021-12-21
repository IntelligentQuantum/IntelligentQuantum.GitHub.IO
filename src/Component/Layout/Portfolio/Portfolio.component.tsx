import React  from "react";
import Card from "./Card.component";
import Data from "../../../Assets/Data/data.json";
import {AddClass, RemoveClass} from "../../../Utils/Utils.service";
import {Helmet} from "react-helmet";

const Portfolio = (props: any) =>
{
    let Language: "en" | "gr" | "pr" = props.content.language;
    let Cards = Data[Language].myWorks.map((work: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    work={work}
                    text={props.content.readMore}
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
                <title> Parsa Firoozi &mdash; Portfolio </title>
                <meta property="theme-color" content="#4f40f8"/>
                <meta name="language" content={Language}/>
                <meta name="Classification" content="Portfolio"/>
                <meta name="subject" content="Portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Parsa Firoozi Portfolio"/>
                <meta name="keywords" content="im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio"/>
                <meta name="author" content="Parsa Firoozi"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://parsa-firoozi.ir/portfolio"/>
                <meta property="og:title" content="Parsa Firoozi"/>
                <meta property="og:description" content="Parsa Firoozi Portfolio"/>
                <meta property="og:image" content="https://parsa-firoozi.ir/favicon.png"/>
                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:url" content="https://parsa-firoozi.ir/portfolio"/>
                <meta property="twitter:title" content="Parsa Firoozi"/>
                <meta property="twitter:description" content="Parsa Firoozi Portfolio"/>
                <meta property="twitter:image" content="%PUBLIC_URL%/favicon.png"/>
            </Helmet>

            <div className="main__content">
                <div className="main__background"/>
                <div className="hr"/>
                <section className="portfolio">
                    <ul className="heading__small">
                        <li className={`portfolio__item--card active all_categories`} onClick={() => { RemoveClass('.portfolio__item--card', 'active'); AddClass('.all_categories', 'active'); AddClass('.portfolio__item', 'active') }}>{props.content.categories[0]}</li>
                        <li className={`portfolio__item--card web_development`} onClick={() => { console.log("hi"); RemoveClass('.portfolio__item--card', 'active'); AddClass('.web_development', 'active') }}>{props.content.categories[1]}</li>
                        <li className={`portfolio__item--card app_development`} onClick={() => { RemoveClass('.portfolio__item--card', 'active'); AddClass('.app_development', 'active') }}>{props.content.categories[2]}</li>
                        <li className={`portfolio__item--card robot_development`} onClick={() => { RemoveClass('.portfolio__item--card', 'active'); AddClass('.robot_development', 'active') }}>{props.content.categories[3]}</li>
                        <li className={`portfolio__item--card graphic_design`} onClick={() => { RemoveClass('.portfolio__item--card', 'active'); AddClass('.graphic_design', 'active') }}>{props.content.categories[4]}</li>
                    </ul>
                    <div className="portfolio__items">
                        {Cards}
                    </div>
                </section>
                <div className="hr"/>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
