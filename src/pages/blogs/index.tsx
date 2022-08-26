import { Fragment } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { getAllBlogs } from '../../utils/blogs.util';

import { BiChevronRight } from 'react-icons/bi';

import styles from '../../styles/blogs.module.scss';

const Blogs: NextPage = (props: any) =>
{
    return (
        <Fragment>
            <Head>
                <title>IntelligentQuantum &mdash; Blogs</title>
            </Head>

            <section className={styles.blogs}>
                <h4 className={styles.blogsHeading}>Blogs</h4>
                <div className={styles.blogsCards}>
                    {
                        props.blogs.map((blog: any) =>
                        {
                            return (
                                <div key={blog.slug} className={styles.blogsCardsCard}>
                                    <span className={styles.blogsCardsCardImage}>
                                        <Image
                                            src={'/images/' + blog.image}
                                            alt={blog.title}
                                            layout='intrinsic'
                                            width={1000}
                                            height={500}
                                        />
                                    </span>

                                    <div className={styles.blogsCardsCardContent}>
                                        <h3 className={styles.blogsCardsCardContentTitle}>{blog.title}</h3>
                                        <p className={styles.blogsCardsCardContentParagraph}>{blog.excerpt}</p>
                                        <Link href={'/blogs/' + blog.slug }>
                                            <a className={styles.blogsCardsCardContentButton}>
                                                READ MORE
                                                <BiChevronRight />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async() =>
{
    const allBlogs = getAllBlogs();

    return {
        props:
        {
            blogs: allBlogs
        },
        revalidate: 3600 // 1 Hour
    };
};

export default Blogs;
