import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import CountUp from 'react-countup';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactTypingEffect from 'react-typing-effect';

import type { IPlan } from '../interfaces/plan';
import type { IService } from '../interfaces/service';
import type { IContent } from '../interfaces/content';
import type { IRecommendation } from '../interfaces/recommendation';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import stylesHome from '../styles/pages/home.module.scss';
import stylesMain from '../styles/components/main.module.scss';
import stylesButtons from '../styles/components/button.module.scss';

const Main = dynamic(() => import('../components/layouts/main/main.component'));
const PlanCard = dynamic(() => import('../components/home/plan-card.component'));
const ServiceCard = dynamic(() => import('../components/home/service-card.component'));
const RecommendationCard = dynamic(() => import('../components/home/recommendation-card.component'));

const Home = (props: { content: IContent }) =>
{
    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Full-Stack Developer & Graphic Designer</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
            </Head>
            <Main content={props?.content}>
                <div className={stylesMain.mainContent}>
                    <div className={stylesMain.mainBackground}/>
                    <section className={stylesHome.home}>
                        <header className={stylesHome.homeHeader}>
                            <div className={stylesHome.homeHeaderContent}>
                                <h1>
                                    {props?.content?.titles[0]}
                                </h1>
                                <div className={stylesHome.homeHeaderContentDescription}>
                                    <span>
                                &lt;<i>code</i>&gt;
                                    </span>
                                    <span className='build'>
                                        <span className='build__cursor'>
                                            <ReactTypingEffect
                                                speed={90}
                                                text={props?.content?.typing_effect || ['']}
                                            />
                                        </span>
                                    </span>
                                    <span>
                                &lt;/<i>code</i>&gt;
                                    </span>
                                </div>
                                <Link href='/portfolio'>
                                    <a className={classnames(stylesButtons.button, 'align-self-start')}>
                                        {props?.content?.explore_more}
                                    </a>
                                </Link>
                            </div>
                            <div className={stylesHome.homeHeaderLogs}>
                                <div className={stylesHome.homeHeaderLogsBox}>
                                    <span>
                                        <CountUp
                                            start={0}
                                            end={99}
                                            duration={5}
                                        />
                                +
                                    </span>
                                    <p>
                                        {props?.content?.headers[0]}
                                    </p>
                                </div>
                                <div className={stylesHome.homeHeaderLogsBox}>
                                    <span>
                                        <CountUp
                                            start={0}
                                            end={100}
                                            duration={5}
                                        />
                                +
                                    </span>
                                    <p>
                                        {props?.content?.headers[1]}
                                    </p>
                                </div>
                                <div className={stylesHome.homeHeaderLogsBox}>
                                    <span>
                                        <CountUp
                                            start={0}
                                            end={5}
                                            duration={5}
                                        />
                                +
                                    </span>
                                    <p>
                                        {props?.content?.headers[2]}
                                    </p>
                                </div>
                                <div className={stylesHome.homeHeaderLogsBox}>
                                    <span>
                                        <CountUp
                                            start={0}
                                            end={20}
                                            duration={5}
                                        />
                                +
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
                        <div className={stylesHome.homeServices}>
                            {
                                props?.content?.services?.map((service: IService) =>
                                    <ServiceCard
                                        key={ service?.id }
                                        service={ service }
                                        text={ props?.content?.read_more }
                                    />
                                )
                            }
                        </div>
                        <h4 className='heading'>
                            {props?.content?.titles[2]}
                        </h4>
                        <div className={stylesHome.homePlans}>
                            {
                                props?.content?.plans?.map((plan: IPlan) =>
                                    <PlanCard
                                        key={ plan?.id }
                                        plan={ plan }
                                        content={ props?.content}
                                        text={ props?.content?.order_now }
                                    />
                                )
                            }
                        </div>
                        <h4 className='heading'>
                            {props?.content?.titles[8]}
                        </h4>
                        <div className={stylesHome.homeRecommendations}>
                            <Swiper
                                navigation={true}
                                modules={
                                    [
                                        Navigation,
                                        Pagination
                                    ]}
                                pagination={
                                    {
                                        clickable: true
                                    }}
                                breakpoints={
                                    {
                                        0:
                                            {
                                                slidesPerView: 1,
                                                spaceBetween: 20
                                            },
                                        650:
                                            {
                                                slidesPerView: 2,
                                                spaceBetween: 20
                                            },
                                        1400:
                                            {
                                                slidesPerView: 3,
                                                spaceBetween: 20
                                            }
                                    }}
                            >
                                {
                                    props?.content?.recommendations?.map((recommendation: IRecommendation) =>
                                        (
                                            <SwiperSlide key={ recommendation?.id }>
                                                <RecommendationCard
                                                    language={ props?.content?.language }
                                                    recommendation={ recommendation }
                                                />
                                            </SwiperSlide>
                                        ))
                                }
                            </Swiper>
                        </div>
                        <div className='hr'/>
                    </section>
                </div>
            </Main>
        </>
    );
};

export default Home;
