import Card from './card.component';

import data from '../../assets/data/data.json';

const Funny = (props: any) =>
{
    const language: 'en' | 'de' | 'fa' = props?.content?.language;
    const Facts = data[language].funny_facts.map((fact: any, i: number) =>
        {
            return (
                <Card
                    key={i}
                    fact={fact}
                />
            );
        }
    )

    return (
        <>
            <div className='main__content'>
                <div className='main__background'/>
                <div className='hr'/>
                <section className='funny'>
                    <h4 className='heading'>
                        {props?.content?.titles[5]}
                    </h4>
                    { Facts }
                </section>
                <div className='hr'/>
            </div>
        </>
    );
};

export default Funny;
