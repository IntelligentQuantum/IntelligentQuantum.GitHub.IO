import Card from './card.component';

import data from '../../assets/data/data.json';

const Blog = (props: any) =>
{
    const language: 'en' | 'gr' | 'pr' = props?.content?.language;
    const cards = data[language].myBlogs.map((blog: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    blog={blog}
                    text={props?.content?.readMore}
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
