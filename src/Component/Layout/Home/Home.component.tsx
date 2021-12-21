import CountUp from 'react-countup';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import PlanCard from "./CardPlans.component";
import ServiceCard from "./CardServices.component";
import Data from "../../../Assets/Data/data.json";
import { TypeWriter } from '../../../Utils/Utils.service';

const Home = (props: any) =>
{
    let Language: "en" | "gr" | "pr" = props.content.language;
    const ServicesCard = Data[Language].myServices.map((service: any, i: number) =>
        {
            return (
                <ServiceCard
                    key={i}
                    service={service}
                    text={props.content.readMore}
                />
            );
        }
    )
    const PlansCard = Data[Language].myPlans.map((plan: any, i: number) =>
        {
            return (
                <PlanCard
                    key={i}
                    plan={plan}
                    content={props.content}
                    text={props.content.orderNow}
                />
            );
        }
    );

    useEffect(() =>
    {
        let DataWords: any = [ '', '', '', '' ];

        const auto = () =>
        {
            let Language: string = localStorage.getItem('language') || 'en';

            if (Language === 'en')
            {DataWords = Data.en.dataWords; }
            else if (Language === 'gr')
            { DataWords = Data.gr.dataWords; }
            else if (Language === 'pr')
            { DataWords = Data.pr.dataWords; }

            const textElement: HTMLElement | any = document.querySelector('.build');
            const wait: any = textElement.getAttribute('data-wait');

            new TypeWriter(textElement, DataWords, wait);
        }

        auto();
    }, []);

    return (
        <div className="main__content">
            <div className="main__background"/>
            <section className="home">
                <header className="home__header">
                    <div className="home__header--content">
                        <h1>{props.content.titles[0]}</h1>
                        <div className="home__header--content__description">
                            &lt;<i>code</i>&gt;
                            <span className="build"/>
                            &lt;/<i>code</i>&gt;
                        </div>
                        <Link to="/portfolio" className="button align-self-start">{props.content.exploreMore}</Link>
                    </div>
                    <div className="home__header--logs">
                        <div className="home__header--logs__box">
                            <span>
                                <CountUp
                                    start={0}
                                    end={75}
                                    duration={5}
                                />
                            </span>
                            <p>{props.content.headers[0]}</p>
                        </div>
                        <div className="home__header--logs__box">
                            <span>
                                <CountUp
                                    start={0}
                                    end={80}
                                    duration={5}
                                />
                            </span>
                            <p>{props.content.headers[1]}</p>
                        </div>
                        <div className="home__header--logs__box">
                            <span>
                                <CountUp
                                    start={0}
                                    end={5}
                                    duration={5}
                                />
                            </span>
                            <p>{props.content.headers[2]}</p>
                        </div>
                        <div className="home__header--logs__box">
                            <span>
                                <CountUp
                                    start={0}
                                    end={15}
                                    duration={5}
                                />
                            </span>
                            <p>{props.content.headers[3]}</p>
                        </div>
                    </div>
                </header>

                <div className='hr'/>

                <h4 className="heading">{props.content.titles[1]}</h4>
                <div className="home__services">
                    {ServicesCard}
                </div>

                <h4 className="heading">{props.content.titles[2]}</h4>
                <div className="home__plans">
                    {PlansCard}
                </div>

                <div className="hr"/>
            </section>
        </div>
    );
};

export default Home;
