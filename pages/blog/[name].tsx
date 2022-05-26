import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Main from '../../components/layouts/main/main.component';
import BlogViewComponent from '../../components/blog/view.component';

import data from '../../assets/data/data.json';

const BlogView: NextPage = (props: any) =>
{
    const router = useRouter();
    const { name } = router.query;
    const [blog, setBlog]: any = useState('loading');

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

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Contact with im-parsa from your mail</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='Classification' content='Contact'/>
                <meta name='subject' content='Contact'/>
                <meta name='description' content='Parsa Firoozi Contact'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Contact'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/contact'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Contact'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/contact'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Contact'/>
            </Head>
            <Main content={props?.content}>
                <BlogViewComponent
                    blog={blog}
                    content={props?.content}
                />
            </Main>
        </>
    )
}

export default BlogView;
