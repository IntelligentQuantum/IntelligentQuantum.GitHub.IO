import { Fragment } from 'react';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { getBlogData, getBlogsFiles } from '../../utils/blogs.util';

import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../../styles/blogs.module.scss';

const BlogSlug: NextPage = (props: any) =>
{
    return (
        <Fragment>
            <Head>
                <title>IntelligentQuantum &mdash;</title>
            </Head>

            <section className={styles.blogs}>
                <div className={styles.blogsBlogSlugTitle}>
                    <h2 className={styles.blogsHeading}>{props.blog.slug}</h2>
                    <span>educational</span>
                </div>
                <div className={styles.blogsBlogSlugHeadBox}>
                    <span className={styles.blogsBlogSlugHeadImage}>
                        <Image
                            src={`/images/${ props.blog.image }`}
                            alt={props.blog.title}
                            layout='fill'
                        />
                    </span>
                </div>

                <article className={styles.blogsBlogSlugArticle}>
                    <div className={styles.blogsBlogSlugArticleAuthor}>
                        <ul>
                            <li>
                                <span>Author:</span>
                                {props.blog.author}
                            </li>
                            <li>
                                <span>Source:</span>
                                {props.blog.source}
                            </li>
                            <li>
                                <span>Created At:</span>
                                {props.blog.date}
                            </li>
                            <li>
                                <span>Category:</span>
                                {props.blog.category}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.blogsBlogSlugArticleContent}>
                        <ReactMarkdown
                            components={{
                                code({node, inline, className, children, ...props}: CodeProps)
                                {
                                    const match = /language-(\w+)/.exec(className || '');

                                    return (
                                        <>
                                            {
                                                !inline && match ?
                                                    (
                                                        <SyntaxHighlighter
                                                            style={atomDark as unknown as any}
                                                            language={match[1]}
                                                            PreTag="div"
                                                            {...props}
                                                        >
                                                            { String(children).replace(/\n$/, '') }
                                                        </SyntaxHighlighter>
                                                    )
                                                    :
                                                    (
                                                        <code className={className} {...props}>{children}</code>
                                                    )
                                            }
                                        </>
                                    );
                                }
                            }}
                        >
                            {props.blog.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </section>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async(context) =>
{
    const { params }: any = context;
    const { slug } = params;

    const blogData = getBlogData(slug);

    return {
        props: {
            blog: blogData
        },
        // revalidate: 600 // 10 Minutes
    };
};

export const getStaticPaths: GetStaticPaths = async() =>
{
    const blogFilenames = getBlogsFiles();
    const slugs = blogFilenames.map((filename: string) => filename.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug: string) => ({ params: { slug } })),
        fallback: false
    };
};

export default BlogSlug;
