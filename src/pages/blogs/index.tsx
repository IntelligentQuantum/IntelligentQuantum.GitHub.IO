import { Fragment } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Main from '../../components/layouts/main/main.component';

import { BiChevronRight } from 'react-icons/bi';

import styles from '../../styles/blogs.module.scss';

const Blogs: NextPage = () =>
{
    return (
        <Fragment>
            <Head>
                <title>IntelligentQuantum &mdash; Blogs</title>
            </Head>

            <Main>
                <section className={styles.blogs}>
                    <h4 className={styles.blogsHeading}>Blogs</h4>
                    <div className={styles.blogsCards}>
                        <div className={styles.blogsCardsCard}>
                            <span className={styles.blogsCardsCardImage}>
                                <Image
                                    src='/images/IntelligentQuantum.jpg'
                                    alt='Blogs 1'
                                    layout='intrinsic'
                                    width={1000}
                                    height={500}
                                />
                            </span>

                            <div className={styles.blogsCardsCardContent}>
                                <h3 className={styles.blogsCardsCardContentTitle}>About NextJS</h3>
                                <p className={styles.blogsCardsCardContentParagraph}>Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.</p>
                                <Link href='/blogs/1'>
                                    <a className={styles.blogsCardsCardContentButton}>
                                        READ MORE
                                        <BiChevronRight />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.blogsCardsCard}>
                            <span className={styles.blogsCardsCardImage}>
                                <Image
                                    src='/images/IntelligentQuantum.jpg'
                                    alt='Blogs 1'
                                    layout='intrinsic'
                                    width={1000}
                                    height={500}
                                />
                            </span>

                            <div className={styles.blogsCardsCardContent}>
                                <h3 className={styles.blogsCardsCardContentTitle}>About NextJS</h3>
                                <p className={styles.blogsCardsCardContentParagraph}>Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.</p>
                                <Link href='/blogs/1'>
                                    <a className={styles.blogsCardsCardContentButton}>
                                        READ MORE
                                        <BiChevronRight />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.blogsCardsCard}>
                            <span className={styles.blogsCardsCardImage}>
                                <Image
                                    src='/images/IntelligentQuantum.jpg'
                                    alt='Blogs 1'
                                    layout='intrinsic'
                                    width={1000}
                                    height={500}
                                />
                            </span>

                            <div className={styles.blogsCardsCardContent}>
                                <h3 className={styles.blogsCardsCardContentTitle}>About NextJS</h3>
                                <p className={styles.blogsCardsCardContentParagraph}>Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.</p>
                                <Link href='/blogs/1'>
                                    <a className={styles.blogsCardsCardContentButton}>
                                        READ MORE
                                        <BiChevronRight />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.blogsCardsCard}>
                            <span className={styles.blogsCardsCardImage}>
                                <Image
                                    src='/images/IntelligentQuantum.jpg'
                                    alt='Blogs 1'
                                    layout='intrinsic'
                                    width={1000}
                                    height={500}
                                />
                            </span>

                            <div className={styles.blogsCardsCardContent}>
                                <h3 className={styles.blogsCardsCardContentTitle}>About NextJS</h3>
                                <p className={styles.blogsCardsCardContentParagraph}>Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.</p>
                                <Link href='/blogs/1'>
                                    <a className={styles.blogsCardsCardContentButton}>
                                        READ MORE
                                        <BiChevronRight />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
        </Fragment>
    );
};

export default Blogs;
