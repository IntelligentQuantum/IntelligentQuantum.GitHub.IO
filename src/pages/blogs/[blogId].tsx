import { Fragment } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Main from '../../components/layouts/main/main.component';

import { BiChevronRight } from 'react-icons/bi';

import styles from '../../styles/blogs.module.scss';

const BlogId: NextPage = () =>
{
    return (
        <Fragment>
            <Head>
                <title>IntelligentQuantum &mdash; BlogId</title>
            </Head>

            <Main>
                <section className={styles.blogs}>
                    <div className={styles.blogsBlogIdTitle}>
                        <h2 className={styles.blogsHeading}>BlogId</h2>
                        <span>educational</span>
                    </div>
                    <div className={styles.blogsBlogIdHeadBox}>
                        <span className={styles.blogsBlogIdHeadImage}>
                            <Image
                                src='/images/IntelligentQuantum.jpg'
                                alt='Blogs 1'
                                layout='fill'
                            />
                        </span>
                    </div>
                </section>
            </Main>
        </Fragment>
    );
};

export default BlogId;
