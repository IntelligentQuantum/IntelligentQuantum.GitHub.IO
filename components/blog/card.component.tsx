import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import type { Blog } from '../../interfaces/blog';

import stylesBlog from '../../styles/pages/blog.module.scss';

const ButtonSecondary = dynamic(() => import('../buttons/secondary-button.component'));

const BlogCard = (props: { blog: Blog, text: string }) =>
    (
        <div className={stylesBlog.blogItem}>
            <Image
                src={props.blog.image}
                alt={props.blog.name}
                layout='fill'
            />
            <div className={stylesBlog.blogItemBox}>
                <h2>
                    { props.blog.name.split('_').join(' ') }
                </h2>
                <p>
                    { props.blog.description }
                </p>
                <ButtonSecondary
                    link={`/blogs/${ props.blog.name }`}
                    text={ props.text }
                />
            </div>
        </div>
    );

export default BlogCard;
