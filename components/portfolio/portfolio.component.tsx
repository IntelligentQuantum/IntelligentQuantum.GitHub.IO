import Card from './card.component';
import data from '../../assets/data/data.json';
import { addClass, removeClass } from '../../lib/utils';

const Portfolio = (props: any) =>
{
    let language: 'en' | 'gr' | 'pr' = props?.content?.language;
    let cards = data[language].myWorks.map((work: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    work={ work }
                    text={ props?.content?.readMore }
                />
            );
        }
    )

    return (
        <>
            <div className='main__content'>
                <div className='main__background'/>
                <div className='hr'/>
                <section className='portfolio'>
                    <ul className='heading__small'>
                        <li className='portfolio__item--card active all_categories' onClick={() => { removeClass('.portfolio__item--card', 'active'); addClass('.all_categories', 'active'); addClass('.portfolio__item', 'active') }}>{props?.content?.categories[0]}</li>
                        <li className='portfolio__item--card web_development' onClick={() => { console.log('hi'); removeClass('.portfolio__item--card', 'active'); addClass('.web_development', 'active') }}>{props?.content?.categories[1]}</li>
                        <li className='portfolio__item--card app_development' onClick={() => { removeClass('.portfolio__item--card', 'active'); addClass('.app_development', 'active') }}>{props?.content?.categories[2]}</li>
                        <li className='portfolio__item--card robot_development' onClick={() => { removeClass('.portfolio__item--card', 'active'); addClass('.robot_development', 'active') }}>{props?.content?.categories[3]}</li>
                        <li className='portfolio__item--card graphic_design' onClick={() => { removeClass('.portfolio__item--card', 'active'); addClass('.graphic_design', 'active') }}>{props?.content?.categories[4]}</li>
                    </ul>
                    <div className='portfolio__items'>
                        { cards }
                    </div>
                </section>
                <div className='hr'/>
            </div>
        </>
    );
};

export default Portfolio;
