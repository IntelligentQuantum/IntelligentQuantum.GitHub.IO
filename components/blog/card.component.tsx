import ButtonSecondary from '../buttons/secondary-button.component';

import stylesBlog from '../../styles/pages/blog.module.scss';

const BlogCard = (props: { text: string, blog: { image: string, name: string, description: string }}) =>
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
