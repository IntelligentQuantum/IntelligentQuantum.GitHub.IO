import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import reactHtmlParser from 'html-react-parser';
import React, { useEffect, useState } from 'react';

import type { IBlog } from '../../interfaces/blog';
import type { IContent } from '../../interfaces/content';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

import stylesBlog from '../../styles/pages/blog.module.scss';
import stylesMain from '../../styles/components/main.module.scss';

const Error = dynamic(() => import('../../components/error/error.component'));
const Main = dynamic(() => import('../../components/layouts/main/main.component'));

const BlogView = (props: { content: IContent }) =>
{
    const router = useRouter();
    const { name } = router.query;
    const [blog, setBlog] = useState<IBlog>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() =>
    {
        const blogs = props?.content?.my_blogs;

        for (let i = 0; i < blogs.length; i++)
        {
            if (blogs[i].name === name)
                setBlog(blogs[i]);
        }

        setLoading(false);
    }, [props, setBlog, name, blog]);

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
            {
                blog?.name
                    ? <Head>
                        <title>Parsa Firoozi &mdash; {blog?.name || ''}</title>

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
                        <meta property='og:url' content={'https://parsa-firoozi.ir/blogs/' + blog?.name}/>
                        <meta property='og:title' content='Parsa Firoozi'/>
                        <meta property='og:description' content={'Parsa Firoozi Blogs - ' + blog?.name}/>
                        <meta property='og:image' content={'https://parsa-firoozi.ir/' + blog?.image}/>

                        <meta name='twitter:card' content='summary_large_image'/>
                        <meta property='twitter:url' content={'https://parsa-firoozi.ir/blogs/' + blog?.name}/>
                        <meta property='twitter:title' content='Parsa Firoozi'/>
                        <meta property='twitter:description' content={'Parsa Firoozi Blogs - ' + blog?.name}/>
                    </Head>
                    : <Head>
                        <title>Parsa Firoozi &mdash; Blog page</title>

                        <meta charSet='UTF-8' />
                        <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                        <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                        <meta name='Classification' content='Blogs'/>
                        <meta name='subject' content='Blogs'/>
                        <meta name='description' content='Parsa Firoozi blog page'/>
                        <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Blogs'/>
                        <meta name='author' content='Parsa Firoozi'/>

                        <meta property='og:type' content='website'/>
                        <meta property='og:url' content='https://parsa-firoozi.ir/blogs/'/>
                        <meta property='og:title' content='Parsa Firoozi'/>
                        <meta property='og:description' content='Parsa Firoozi blog page'/>
                        <meta property='og:image' content='https://parsa-firoozi.ir/'/>

                        <meta name='twitter:card' content='summary_large_image'/>
                        <meta property='twitter:url' content='https://parsa-firoozi.ir/blogs/'/>
                        <meta property='twitter:title' content='Parsa Firoozi'/>
                        <meta property='twitter:description' content='Parsa Firoozi blogs page'/>
                    </Head>
            }
            <Main content={props?.content}>
                {
                    loading
                        ? (
                            <div className='loadingParent'>
                                <div className='loading'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        )
                        : null
                }
                {
                    blog?.name
                        ? (
                            <div className={stylesMain.mainContent}>
                                <span className={stylesMain.mainBackground}/>
                                <section className={stylesBlog.blog}>
                                    <div className={stylesBlog.blogHeader}>
                                        <h2>
                                            {blog?.name?.split('_').join(' ').charAt(0).toUpperCase() + blog?.name?.split('_').join(' ').slice(1)}
                                        </h2>

                                        <span>
                                            {blog?.category}
                                        </span>
                                    </div>
                                    <div className={stylesBlog.blogViewImage}>
                                        <Image
                                            src={blog.image}
                                            alt={blog.name}
                                            layout='fill'
                                        />
                                    </div>
                                    <span className='hr'/>
                                    <div className={stylesBlog.blogView}>
                                        <div className={stylesBlog.blogViewCardHeader}>
                                            <span>
                                                <p>
                                                    {props?.content?.id}:
                                                </p>
                                                {blog.id}
                                            </span>
                                            <span>
                                                <p>
                                                    {props?.content?.author}:
                                                </p>
                                                {props.content.my_name}
                                            </span>
                                            <span>
                                                <p>
                                                    {props?.content?.source}:
                                                </p>
                                                {blog.source}
                                            </span>
                                            <span>
                                                <p>
                                                    {props?.content?.created_at}:
                                                </p>
                                                {moment(Number(blog.created_at)).format('MMM Do YY')}
                                            </span>
                                            <span>
                                                <p>
                                                    {props?.content?.category}:
                                                </p>
                                                {blog.category}
                                            </span>
                                        </div>
                                        <article className={stylesBlog.blogViewCard}>
                                            <h3>
                                                {blog?.description}
                                            </h3>
                                            <span className='hr'/>
                                            {reactHtmlParser(blog.content)}
                                        </article>
                                    </div>
                                </section>
                                <span className='hr'/>
                            </div>
                        )
                        : null
                }
                {
                    !blog && !loading
                        ? (
                            <div className={stylesMain.mainContent}>
                                <span className={stylesMain.mainBackground}/>
                                <Error
                                    title='404'
                                    description={props?.content?.blog_not_found}
                                    content={props?.content}
                                />
                                <span className='hr'/>
                            </div>
                        )
                        : null
                }
            </Main>
        </>
    );
};

export default BlogView;
