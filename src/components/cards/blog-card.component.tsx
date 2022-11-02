import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import type { IBlog } from '../../interfaces/blog';

import { capitalizeEachFirstLetter } from '../../utils';

import stylesBlog from '../../styles/pages/blog.module.scss';

const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

const BlogCard = (props: { blog: IBlog, text: string }) =>
    (
        <div className={stylesBlog.blogItem}>
            <span className={stylesBlog.blogItemImage}>
                <Image
                    src={ props.blog.image }
                    alt={ props.blog.name }
                    layout='fill'
                />
            </span>
            <div className={stylesBlog.blogItemContent}>
                <h3>
                    { capitalizeEachFirstLetter(props.blog.name.split('_').join(' ')) }
                </h3>
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
