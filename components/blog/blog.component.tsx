import Card from './card.component';

const Blog = (props: any) =>
{
    const cards = props?.content?.my_blogs.map((blog: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    blog={blog}
                    text={props?.content?.read_more}
                />
            );
        }
    )

    return (
        <div className='main__content'>
            <div className='main__background'/>
            <h4 className='heading'>
                {props?.content?.titles[6]}
            </h4>
            <section className='blog__items'>
                { cards }
            </section>
            <div className='hr'/>
        </div>
    );
};

export default Blog;
