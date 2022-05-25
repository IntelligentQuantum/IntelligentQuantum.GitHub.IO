import moment  from 'moment';
import reactHtmlParser from 'html-react-parser';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

import Error from '../error/error.component';

const BlogView = (props: any) =>
{
    const Language: 'en' | 'gr' | 'pr' = props?.content?.language;

    switch (Language)
    {
        case 'en':
            moment.locale('en');
            break;
        case 'gr':
            moment.locale('de');
            break;
        case 'pr':
            moment.locale('fa');
            break;
        default:
            moment.locale('en');
    }

    return (
        props.blog?.name
            ?
            <>
                <div className='main__content'>
                    <div className='main__background'/>
                    <section className='blog'>
                        <div className='blog__view--image'>
                            <img src={props.blog.img} alt={props.blog.name}/>
                        </div>
                        <div className='hr'/>
                        <div className='blog__view--card__header'>
                        <span>
                            <p>{props?.content?.createdAt}:</p>
                            {moment(Number(props.blog.createdAt)).format('MMM Do YY')}
                        </span>
                            <span>
                             <p>
                                 {props?.content?.source}:
                             </p>
                                {props.blog.source}
                        </span>
                        </div>
                        <article className='blog__view--card'>
                            {reactHtmlParser(props.blog.content)}
                        </article>
                    </section>
                    <div className='hr'/>
                </div>
            </>
            :
            <div className='main__content'>
                <div className='main__background'/>
                <Error
                    title='404'
                    description={props?.content?.blogNotFound}
                    content={props?.content}
                />
                <div className='hr'/>
            </div>
    );
};

export default BlogView;
