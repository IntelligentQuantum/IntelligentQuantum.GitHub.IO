import ButtonSecondary from '../buttons/secondary-button.component';

const BlogCard = (props: { text: string, blog: { image: string, name: string, description: string }}) =>
{
    return (
        <div className='blog__item active'>
            <img src={props.blog.image} alt={props.blog.name}/>
            <div className='blog__item--box'>
                <h2>
                    {props.blog.name.split('_').join(' ')}
                </h2>
                <p>
                    {props.blog.description}
                </p>
                <ButtonSecondary
                    link={`/blogs/${props.blog.name}`}
                    text={props.text}
                />
            </div>
        </div>
    );
};

export default BlogCard;
