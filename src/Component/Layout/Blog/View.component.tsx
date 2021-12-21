import React  from "react";
import Moment  from "moment";
import 'moment/locale/en-gb';
import 'moment/locale/de';
import 'moment/locale/fa';
import ReactMarkdown from 'react-markdown'
import Error from "../../UI/Error.component";
import {Helmet} from "react-helmet";

const BlogView = (props: any) =>
{
    let MailEl;
    let Language: "en" | "gr" | "pr" = props.content.language;

    switch (Language)
    {
        case 'en':
            Moment.locale('en');
            break;
        case 'gr':
            Moment.locale('de');
            break;
        case 'pr':
            Moment.locale('fa');
            break;
        default:
            Moment.locale('en');
    }

    if (props.blog?.name)
    {
        MailEl =
            <React.Fragment>
                <Helmet>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <title> Parsa Firoozi &mdash; {props.blog.name.split('_').join(" ")} </title>
                    <meta property="theme-color" content="#4f40f8"/>
                    <meta name="language" content={props.content.language}/>
                    <meta name="Classification" content="Tutorials"/>
                    <meta name="subject" content={props.blog.description}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content={props.blog.description}/>
                    <meta name="keywords" content={props.blog.description.split(" ").join(", ")}/>
                    <meta name="author" content="Parsa Firoozi"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={`https://parsa-firoozi.ir/${props.blog.name}`}/>
                    <meta property="og:title" content="Parsa Firoozi"/>
                    <meta property="og:description" content={props.blog.description}/>
                    <meta property="og:image" content="https://parsa-firoozi.ir/favicon.png"/>
                    <meta property="twitter:card" content="summary"/>
                    <meta property="twitter:url" content={`https://parsa-firoozi.ir/${props.blog.name}`}/>
                    <meta property="twitter:title" content="Parsa Firoozi"/>
                    <meta property="twitter:description" content={props.blog.description}/>
                    <meta property="twitter:image" content="%PUBLIC_URL%/favicon.png"/>
                </Helmet>

                <div className="main__content">
                    <div className="main__background"/>
                    <section className="blog">
                        <div className="blog__view--image">
                            <img src={props.blog.img} alt={props.blog.name}/>
                        </div>

                        <div className="hr"/>

                        <div className="blog__view--card__header">
                        <span>
                            <p>{props.content.createdAt}:</p>
                            {Moment(Number(props.blog.createdAt)).format("MMM Do YY")}
                        </span>
                            <span>
                             <p>{props.content.source}:</p>
                                {props.blog.source}
                        </span>
                        </div>
                        <article className="blog__view--card">
                            <ReactMarkdown>{props.blog.content}</ReactMarkdown>
                        </article>
                    </section>
                    <div className="hr"/>
                </div>
            </React.Fragment>
    }
    else
    {
        MailEl =
            <div className="main__content">
                <div className="main__background"/>
                <Error
                    title="404"
                    description={props.content.blogNotFound}
                    content={props.content}
                />
                <div className="hr"/>
            </div>
    }

    return (MailEl);
};

export default BlogView;
