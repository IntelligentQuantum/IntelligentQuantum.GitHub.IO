import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import reactHtmlParser from 'html-react-parser';
import React, { useEffect, useState } from 'react';

import type { IBlog } from '../../interfaces/blog';
import type { IContent } from '../../interfaces/content';

import { capitalizeEachFirstLetter } from '../../utils';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

import stylesBlog from '../../styles/pages/blog.module.scss';

const Error = dynamic(() => import('../../components/error/error.component'));
const Loader = dynamic(() => import('../../components/loader/loader.component'));
const ItemMotion = dynamic(() => import('../../components/animations/item.component'));

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
                loading
                    ?
                    <Loader />
                    :
                    null
            }
            {
                blog?.name && !loading
                    ?
                    <>
                        <Head>
                            <title>Parsa Firoozi &mdash; { blog.name }</title>

                            <meta charSet='UTF-8' />
                            <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                            <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                            <meta name='Classification' content='Blogs'/>
                            <meta name='subject' content='Blogs'/>
                            <meta name='description' content={'Parsa Firoozi Blogs - ' + blog.name}/>
                            <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Blogs'/>
                            <meta name='author' content='Parsa Firoozi'/>

                            <meta property='og:type' content='website'/>
                            <meta property='og:url' content={'https://parsa-firoozi.ir/blogs/' + blog.name}/>
                            <meta property='og:title' content='Parsa Firoozi'/>
                            <meta property='og:description' content={'Parsa Firoozi Blogs - ' + blog.name}/>
                            <meta property='og:image' content={'https://parsa-firoozi.ir/' + blog.image}/>

                            <meta name='twitter:card' content='summary_large_image'/>
                            <meta property='twitter:url' content={'https://parsa-firoozi.ir/blogs/' + blog.name}/>
                            <meta property='twitter:title' content='Parsa Firoozi'/>
                            <meta property='twitter:description' content={'Parsa Firoozi Blogs - ' + blog.name}/>
                        </Head>

                        <section className={stylesBlog.blog}>
                            <div className={stylesBlog.blogHeader}>
                                <h2>{ capitalizeEachFirstLetter(blog.name.split('_').join(' ')) }</h2>
                                <span>{ blog.category }</span>
                            </div>
                            <ItemMotion index={ 0 }  className={stylesBlog.blogViewImage}>
                                <Image
                                    src={ blog.image }
                                    alt={ blog.name }
                                    layout='fill'
                                />
                            </ItemMotion>

                            <div className={stylesBlog.blogView}>
                                <ItemMotion index={ 2 } className={stylesBlog.blogViewCardHeader}>
                                    <span>
                                        <p>{ props?.content?.id }:</p>
                                        { blog.id }
                                    </span>
                                    <span>
                                        <p>{ props?.content?.author }:</p>
                                        {props.content.my_name}
                                    </span>
                                    <span>
                                        <p>{ props?.content?.source }:</p>
                                        { blog.source }
                                    </span>
                                    <span>
                                        <p>{ props?.content?.created_at }:</p>
                                        { moment(blog.created_at).format('MMM Do YY') }
                                    </span>
                                    <span>
                                        <p>{ props?.content?.category }:</p>
                                        { blog.category }
                                    </span>
                                </ItemMotion>

                                <ItemMotion index={ 1 } className={stylesBlog.blogViewCard}>
                                    <h3>{ blog.description }</h3>
                                    <article>{ reactHtmlParser(blog.content) }</article>
                                </ItemMotion>
                            </div>
                        </section>
                    </>
                    :
                    <Head>
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
            {
                !blog && !loading
                    ?
                    <Error
                        title='404'
                        description={props?.content?.blog_not_found}
                        content={props?.content}
                    />
                    :
                    null
            }
        </>
    );
};

export default BlogView;
