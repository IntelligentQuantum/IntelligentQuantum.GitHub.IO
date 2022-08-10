import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import CountUp from 'react-countup';
import axios, { AxiosResponse } from 'axios';
import Tooltip from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactTypingEffect from 'react-typing-effect';
import { Keyboard, Autoplay, Navigation, Pagination } from 'swiper';

import type { IOrgan } from '../interfaces/organ';
import type { IService } from '../interfaces/service';
import type { IContent } from '../interfaces/content';
import type { IRepository } from '../interfaces/repository';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tippy.js/dist/tippy.css';
import stylesHome from '../styles/pages/home.module.scss';
import stylesMain from '../styles/components/main.module.scss';
import stylesButtons from '../styles/components/button.module.scss';

const Main = dynamic(() => import('../components/layouts/main/main.component'));
const ServiceCard = dynamic(() => import('../components/home/service-card.component'));
const RepositoriesCard = dynamic(() => import('../components/home/repository-card.component'));

const Home = (props: { content: IContent }) =>
{
    const [organs, setOrgans] = useState<IOrgan[]>([]);
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    const getRepositories = async () =>
    {
        await axios.get('/github/repositories')
            .then((response: AxiosResponse) =>
            {
                setRepositories(response.data?.items);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }
    const getOrgans = async () =>
    {
        await axios.get('/github/organs')
            .then((response: AxiosResponse) =>
            {
                setOrgans(response.data?.items);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        getOrgans();
        getRepositories();
    }, []);

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
                                    <ReactTypingEffect
                                        speed={90}
                                        text={props?.content?.typing_effect || ['']}
                                    />
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
                            {props?.content?.titles[8]}
                        </h4>
                        <h2 className='paragraph'>
                            {props?.content?.about_me}
                        </h2>
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
                            {props?.content?.titles[7]}
                        </h4>
                        <div className={stylesHome.homeRepos}>
                            <Swiper
                                navigation={true}
                                modules={
                                    [
                                        Keyboard,
                                        Autoplay,
                                        Navigation,
                                        Pagination
                                    ]}
                                keyboard={
                                    {
                                        enabled: true,
                                    }}
                                autoplay={
                                    {
                                        delay: 2500,
                                        disableOnInteraction: false
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
                                    repositories?.map((repository: IRepository) =>
                                        (
                                            <SwiperSlide key={ repository?.node_id }>
                                                <RepositoriesCard
                                                    repository={ repository }
                                                />
                                            </SwiperSlide>
                                        ))
                                }
                            </Swiper>
                        </div>
                        <div className={stylesHome.homeOrgans}>
                            <Swiper
                                modules={
                                    [
                                        Keyboard,
                                        Autoplay
                                    ]}
                                keyboard={
                                    {
                                        enabled: true,
                                    }}
                                autoplay={
                                    {
                                        delay: 2500,
                                        disableOnInteraction: false
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
                                                slidesPerView: 5,
                                                spaceBetween: 20
                                            }
                                    }}
                            >
                                {
                                    organs?.map((organ: IOrgan) =>
                                        (
                                            <SwiperSlide key={ organ.node_id }>
                                                <Tooltip
                                                    render={() =>
                                                        (
                                                            <span className={stylesHome.homeOrgansTooltip}>
                                                                {organ?.login}
                                                            </span>
                                                        )}
                                                >
                                                    <a href={`https://github.com/${organ?.login}`} target='_blank' className={stylesHome.homeOrgansContent}>
                                                        <img src={organ?.avatar_url} alt={organ?.login}/>
                                                    </a>
                                                </Tooltip>
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
