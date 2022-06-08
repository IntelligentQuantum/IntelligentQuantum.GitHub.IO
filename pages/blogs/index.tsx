import Head from 'next/head';

import type { IBlog } from '../../contracts/IBlog';
import type { IContent } from '../../contracts/IContent';

import Card from '../../components/blog/card.component';
import Main from '../../components/layouts/main/main.component';

import stylesBlog from '../../styles/pages/blog.module.scss';
import stylesMain from '../../styles/components/main.module.scss';

const Blog: (props: { content: IContent }) => JSX.Element = (props: { content: IContent }) =>
{
    const cards = props?.content?.my_blogs?.map((blog: IBlog) =>
        (
            <Card
                key={ blog.name }
                blog={ blog }
                text={ props?.content?.read_more }
            />
        )
    );

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Educational and research blogs</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='Classification' content='Blogs'/>
                <meta name='subject' content='Blogs'/>
                <meta name='description' content='Parsa Firoozi Blogs'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Blogs'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/blogs'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Blogs'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/blogs'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Blogs'/>
            </Head>
            <Main content={props?.content}>
                <div className={stylesMain.mainContent}>
                    <div className={stylesMain.mainBackground}/>
                    <h4 className='heading'>
                        {props?.content?.titles[6]}
                    </h4>
                    <section className={stylesBlog.blogItems}>
                        { cards }
                    </section>
                    <div className='hr'/>
                </div>
            </Main>
        </>
    );
};

export default Blog;
