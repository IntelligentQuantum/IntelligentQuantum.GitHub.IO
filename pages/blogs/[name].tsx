import Head from 'next/head';
import moment  from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import reactHtmlParser from 'html-react-parser';

import type { IContent } from '../../contracts/IContent';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

import data from '../../assets/data/data.json';

import Error from '../../components/error/error.component';
import Main from '../../components/layouts/main/main.component';

import stylesBlog from '../../styles/pages/blog.module.scss';
import stylesMain from '../../styles/components/main.module.scss';

const BlogView: (props: { content: IContent }) => JSX.Element = (props: { content: IContent }) =>
{
    const router = useRouter();
    const { name } = router.query;
    const [blog, setBlog]: any = useState('');

    useEffect(() =>
    {
        const blogs = props?.content?.my_blogs;

        for (let i = 0; i < blogs.length; i++)
        {
            if (blogs[i].name === name)
            {

                setBlog(blogs[i]);
            }
        }
    }, [data, props, setBlog, name]);

    switch (props?.content?.language)
    {
        case 'en':
            moment.locale('en');
            break;
        case 'de':
            moment.locale('de');
            break;
        case 'fa':
            moment.locale('fa');
            break;
        default:
            moment.locale('en');
    }

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; {blog?.name}</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='Classification' content='Blogs'/>
                <meta name='subject' content='Blogs'/>
                <meta name='description' content={'Parsa Firoozi Blogs - ' + blog?.name}/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Blogs'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content={'https://parsa-firoozi.ir/blogs' + blog?.name}/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content={'Parsa Firoozi Blogs - ' + blog?.name}/>
                <meta property='og:image' content='https://parsa-firoozi.ir/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content={'https://parsa-firoozi.ir/blogs' + blog?.name}/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content={'Parsa Firoozi Blogs - ' + blog?.name}/>
            </Head>
            <Main content={props?.content}>
                {
                    blog?.name
                        ?
                        <div className={stylesMain.mainContent}>
                            <div className={stylesMain.mainBackground}/>
                            <section className={stylesBlog.blog}>
                                <div className={stylesBlog.blogViewImage}>
                                    <img src={blog.image} alt={blog.name}/>
                                </div>
                                <div className='hr'/>
                                <div className={stylesBlog.blogViewCardHeader}>
                                    <span>
                                        <p>
                                            {props?.content?.created_at}:
                                        </p>
                                        {moment(Number(blog.created_at)).format('MMM Do YY')}
                                    </span>
                                    <span>
                                        <p>
                                            {props?.content?.source}:
                                        </p>
                                        {blog.source}
                                    </span>
                                </div>
                                <article className={stylesBlog.blogViewCard}>
                                    {reactHtmlParser(blog.content)}
                                </article>
                            </section>
                            <div className='hr'/>
                        </div>
                        :
                        <div className={stylesMain.mainContent}>
                            <div className={stylesMain.mainBackground}/>
                            <Error
                                title='404'
                                description={props?.content?.blog_not_found}
                                content={props?.content}
                            />
                            <div className='hr'/>
                        </div>
                }
            </Main>
        </>
    )
}

export default BlogView;
