import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import type { IBlog } from '../../interfaces/blog';

import { capitalizeEachFirstLetter } from '../../utils';

import stylesBlog from '../../styles/pages/blog.module.scss';

const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

type Props =
    {
        blog: IBlog,
        text: string
    };

const BlogCard = ({ blog, text }: Props) =>
    (
        <div className={stylesBlog.blogItem}>
            <span className={stylesBlog.blogItemImage}>
                <Image
                    src={ blog.image }
                    alt={ blog.name }
                    layout='fill'
                />
            </span>
            <div className={stylesBlog.blogItemContent}>
                <h3>
                    { capitalizeEachFirstLetter(blog.name.split('_').join(' ')) }
                </h3>
                <p>
                    { blog.description }
                </p>
                <ButtonSecondary
                    link={`/blogs/${ blog.name }`}
                    text={ text }
                />
            </div>
        </div>
    );

export default BlogCard;
