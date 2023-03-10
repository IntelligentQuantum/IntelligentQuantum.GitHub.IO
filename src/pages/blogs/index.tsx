import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import type { IBlog } from '../../interfaces/blog';
import type { IContent } from '../../interfaces/content';
import type { ILanguages } from '../../interfaces/language';

import stylesBlog from '../../styles/pages/blog.module.scss';

import data from '../../../public/static/data/data.json';

const Card = dynamic(() => import('../../components/cards/blog-card.component'));
const ScrollMotion = dynamic(() => import('../../components/animations/scroll.component'));

const Blog = () =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Educational and Research Blogs</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='Classification' content='Blogs'/>
                <meta name='subject' content='Blogs'/>
                <meta name='description' content='Parsa Firoozi Educational and Research Blogs'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Educational and Research Blogs, Blogs'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/blogs'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Educational and Research Blogs'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/blogs'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Educational and Research Blogs'/>
            </Head>

            <section className={stylesBlog.blogSection}>
                <h4 className='heading'>{ content?.titles[5] }</h4>
                <ScrollMotion className={stylesBlog.blogItems}>
                    {
                        content?.my_blogs?.map((blog: IBlog) =>
                            (
                                <Card
                                    key={ blog.name }
                                    blog={ blog }
                                    text={ content?.read_more }
                                />
                            ))
                    }
                </ScrollMotion>
            </section>
        </>
    );
}

export default Blog;
