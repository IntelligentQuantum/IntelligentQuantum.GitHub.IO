import Link from 'next/link';
import CountUp from 'react-countup';
import ReactTypingEffect from 'react-typing-effect';

import PlanCard from './plan-card.component';
import ServiceCard from './service-card.component';

import data from '../../assets/data/data.json';


const Home = (props: any) =>
{
    const language: 'en' | 'de' | 'fa' = props?.content?.language;
    const servicesCard = data[language].services.map((service: any, i: number) =>
        {
            return (
                <ServiceCard
                    key={i}
                    service={service}
                    text={props?.content?.read_more}
                />
            );
        }
    )
    const plansCard = data[language].plans.map((plan: any, i: number) =>
        {
            return (
                <PlanCard
                    key={i}
                    plan={plan}
                    content={props?.content}
                    text={props?.content?.order_now}
                />
            );
        }
    );

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
                            <span className='build'>
                                <span className='build__cursor'>
                                    <ReactTypingEffect
                                        text={props?.content?.typing_effect || [ '' ]}
                                    />
                                </span>
                            </span>
                            &lt;/<i>code</i>&gt;
                        </div>
                        <Link href='/portfolio'>
                            <a className='button align-self-start'>
                                {props?.content?.explore_more}
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
                    {servicesCard}
                </div>
                <h4 className='heading'>
                    {props?.content?.titles[2]}
                </h4>
                <div className='home__plans'>
                    {plansCard}
                </div>
                <div className='hr'/>
            </section>
        </div>
    );
};

export default Home;
