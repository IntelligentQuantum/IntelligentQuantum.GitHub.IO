import Link from 'next/link';
import { useEffect } from 'react';
import CountUp from 'react-countup';

import PlanCard from './plan-card.component';
import ServiceCard from './service-card.component';

import data from '../../assets/data/data.json';

import { typeWriter } from '../../lib/utils';

const Home = (props: any) =>
{
    const language: 'en' | 'gr' | 'pr' = props?.content?.language;
    const ServicesCard = data[language].myServices.map((service: any, i: number) =>
        {
            return (
                <ServiceCard
                    key={i}
                    service={service}
                    text={props?.content?.readMore}
                />
            );
        }
    )
    const PlansCard = data[language].myPlans.map((plan: any, i: number) =>
        {
            return (
                <PlanCard
                    key={i}
                    plan={plan}
                    content={props?.content}
                    text={props?.content?.orderNow}
                />
            );
        }
    );

    useEffect(() =>
    {
        let dataWords: any = [ '', '', '', '' ];

        if (language === 'en')
        {
            dataWords = data.en.dataWords;
        }
        else if (language === 'gr')
        {
            dataWords = data.gr.dataWords;
        }
        else if (language === 'pr')
        {
            dataWords = data.pr.dataWords;
        }

        const textElement: HTMLElement | any = document.querySelector('.build');
        const wait: any = textElement.getAttribute('data-wait');

        new typeWriter(textElement, dataWords, wait);
    }, [language]);

    return (
        <div className='main__content'>
            <div className='main__background'/>
            <section className='home'>
                <header className='home__header'>
                    <div className='home__header--content'>
                        <h1>
                            {props?.content?.titles[0]}
                        </h1>
                        <div className='home__header--content__description'>
                            &lt;<i>code</i>&gt;
                            <span className='build'/>
                            &lt;/<i>code</i>&gt;
                        </div>
                        <Link href='/portfolio'>
                            <a className='button align-self-start'>
                                {props?.content?.exploreMore}
                            </a>
                        </Link>
                    </div>
                    <div className='home__header--logs'>
                        <div className='home__header--logs__box'>
                            <span>
                                <CountUp
                                    start={0}
                                    end={75}
                                    duration={5}
                                />
                            </span>
                            <p>
                                {props?.content?.headers[0]}
                            </p>
                        </div>
                        <div className='home__header--logs__box'>
                            <span>
                                <CountUp
                                    start={0}
                                    end={80}
                                    duration={5}
                                />
                            </span>
                            <p>
                                {props?.content?.headers[1]}
                            </p>
                        </div>
                        <div className='home__header--logs__box'>
                            <span>
                                <CountUp
                                    start={0}
                                    end={5}
                                    duration={5}
                                />
                            </span>
                            <p>
                                {props?.content?.headers[2]}
                            </p>
                        </div>
                        <div className='home__header--logs__box'>
                            <span>
                                <CountUp
                                    start={0}
                                    end={15}
                                    duration={5}
                                />
                            </span>
                            <p>
                                {props?.content?.headers[3]}
                            </p>
                        </div>
                    </div>
                </header>
                <div className='hr'/>
                <h4 className='heading'>
                    {props?.content?.titles[1]}
                </h4>
                <div className='home__services'>
                    {ServicesCard}
                </div>
                <h4 className='heading'>
                    {props?.content?.titles[2]}
                </h4>
                <div className='home__plans'>
                    {PlansCard}
                </div>
                <div className='hr'/>
            </section>
        </div>
    );
};

export default Home;
