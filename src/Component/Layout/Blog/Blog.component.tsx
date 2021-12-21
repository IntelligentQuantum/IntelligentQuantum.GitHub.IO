import React  from "react";
import Data from "../../../Assets/Data/data.json";
import Card from "./Card.component";
import {Helmet} from "react-helmet";

const Blog = (props: any) =>
{
    let Language: "en" | "gr" | "pr" = props.content.language;
    let Cards = Data[Language].myBlogs.map((blog: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    blog={blog}
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
                <title> Parsa Firoozi &mdash; Blogs </title>
                <meta property="theme-color" content="#4f40f8"/>
                <meta name="language" content={Language}/>
                <meta name="Classification" content="Blogs"/>
                <meta name="subject" content="Blog"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Parsa Firoozi Blogs"/>
                <meta name="keywords" content="Parsa Firoozi Blogs"/>
                <meta name="author" content="Parsa Firoozi"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://parsa-firoozi.ir/blogs"/>
                <meta property="og:title" content="Parsa Firoozi"/>
                <meta property="og:description" content="Parsa Firoozi Blogs"/>
                <meta property="og:image" content="https://parsa-firoozi.ir/favicon.png"/>
                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:url" content="https://parsa-firoozi.ir/blogs"/>
                <meta property="twitter:title" content="Parsa Firoozi"/>
                <meta property="twitter:description" content="Parsa Firoozi Blogs"/>
                <meta property="twitter:image" content="%PUBLIC_URL%/favicon.png"/>
            </Helmet>

            <div className="main__content">
                <div className="main__background"/>
                <h4 className="heading">{props.content.titles[6]}</h4>
                <section className="blog__items">
                    {Cards}
                </section>
                <div className="hr"/>
            </div>
        </React.Fragment>
    );
};

export default Blog;
