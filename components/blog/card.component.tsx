import ButtonSecondary from '../buttons/secondary-button.component';

import type { IBlog } from '../../contracts/IBlog';

import stylesBlog from '../../styles/pages/blog.module.scss';

const BlogCard = (props: { blog: IBlog, text: string }) =>
    (
        <div className={stylesBlog.blogItem}>
            <img src={props.blog.image} alt={props.blog.name}/>
            <div className={stylesBlog.blogItemBox}>
                <h2>
                    { props.blog.name.split('_').join(' ') }
                </h2>
                <p>
                    { props.blog.description }
                </p>
                <ButtonSecondary
                    link={` /blogs/${props.blog.name}` }
                    text={ props.text }
                />
            </div>
        </div>
    );


export default BlogCard;
