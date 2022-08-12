import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import CountUp from 'react-countup';
import axios, { AxiosResponse } from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Navigation } from 'swiper';
import React, { useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import useTyped from '../hooks/use-typed';

import type { iOrgan } from '../interfaces/organ';
import type { iService } from '../interfaces/service';
import type { iContent } from '../interfaces/content';
import type { iRepository } from '../interfaces/repository';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tippy.js/dist/tippy.css';
import stylesHome from '../styles/pages/home.module.scss';
import stylesButtons from '../styles/components/button.module.scss';

import QtLogo from '../../public/static/images/logos/logo-qt.png';
import NodeLogo from '../../public/static/images/logos/logo-node.png';
import NestLogo from '../../public/static/images/logos/logo-nest.png';
import DenoLogo from '../../public/static/images/logos/logo-deno.png';
import SassLogo from '../../public/static/images/logos/logo-sass.png';
import NextLogo from '../../public/static/images/logos/logo-next.png';
import HtmlLogo from '../../public/static/images/logos/logo-html.png';
import ReactLogo from '../../public/static/images/logos/logo-react.png';
import ExpressLogo from '../../public/static/images/logos/logo-express.png';
import ElectronLogo from '../../public/static/images/logos/logo-electron.png';
import ReactQueryLogo from '../../public/static/images/logos/logo-react-query.png';
import StyledLogo from '../../public/static/images/logos/logo-styled-component.png';
import ReactNativeLogo from '../../public/static/images/logos/logo-react-native.png';

const ServiceCard = dynamic(() => import('../components/home/service-card.component'));
const RepositoriesCard = dynamic(() => import('../components/home/repository-card.component'));
const TooltipPrimary = dynamic(() => import('../components/tooltip/tooltip-primary.component'));

const Home = (props: { content: iContent }) =>
{
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const typing = useTyped(props.content.typing_effect);

    const [organs, setOrgans] = useState<iOrgan[]>([]);
    const [repositories, setRepositories] = useState<iRepository[]>([]);

    const getRepositories = async() =>
    {
        await axios.get('/github/repositories')
            .then((response: AxiosResponse) =>
            {
                setRepositories(response.data.items);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    };
    const getOrgans = async() =>
    {
        await axios.get('/github/organs')
            .then((response: AxiosResponse) =>
            {
                setOrgans(response.data.items);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    };

    useEffect(() =>
    {
        getOrgans();
        getRepositories();
    }, []);

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Full-Stack Developer & Graphic Designer</title>
            </Head>

            <section className={stylesHome.home}>
                <header className={stylesHome.homeHeader}>
                    <div className={stylesHome.homeHeaderContent}>
                        <h2>
                            { props.content.titles[0] }
                        </h2>

                        <div className={stylesHome.homeHeaderContentDescription}>
                            <span>
                                        &lt;<i>code</i>&gt;
                            </span>

                            <span>
                                { typing }
                            </span>

                            <span>
                                        &lt;/<i>code</i>&gt;
                            </span>
                        </div>

                        <Link href='/portfolio'>
                            <a className={classnames(stylesButtons.button, 'align-self-start')}>
                                { props.content.explore_more }
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
                                {props.content.headers[0]}
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
                                {props.content.headers[1]}
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
                                {props.content.headers[2]}
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
                                {props.content.headers[3]}
                            </p>
                        </div>
                    </div>
                </header>

                <h4 className='heading'>
                    { props.content.titles[8] }
                </h4>
                <div className={stylesHome.homeAboutMe}>
                    <h2 className='paragraph'>
                        { props.content.about_me }
                    </h2>

                    <ul className={stylesHome.homeAboutMeAside}>
                        <li className={stylesHome.homeAboutMeAsideItem}>
                            <h6>
                                { props.content.technologies }
                            </h6>
                        </li>

                        <li className={stylesHome.homeAboutMeAsideItem}>
                            <h5>
                                {
                                    props.content.language === 'fa'
                                        ?
                                        props.content.services[0].title.split(' ')[1]
                                        :
                                        props.content.services[0].title.split(' ')[0]
                                }:
                            </h5>

                            <ul className={stylesHome.homeAboutMeAsideItemList}>
                                <TooltipPrimary title='HTML'>
                                    <li>
                                        <span data-html_logo={true}>
                                            <Image
                                                src={ HtmlLogo }
                                                alt='HTML Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='Sass Stylesheet'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ SassLogo }
                                                alt='Sass Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='ReactJS'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ ReactLogo }
                                                alt='React Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='Styled Component'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ StyledLogo }
                                                alt='Styled Component Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='React Query'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ ReactQueryLogo }
                                                alt='React Query Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='NextJS'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ NextLogo }
                                                alt='Next Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>
                            </ul>
                        </li>

                        <li className={stylesHome.homeAboutMeAsideItem}>
                            <h5>
                                {
                                    props.content.language === 'fa'
                                        ?
                                        props.content.services[1].title.split(' ')[1]
                                        :
                                        props.content.services[1].title.split(' ')[0]
                                }:
                            </h5>

                            <ul className={stylesHome.homeAboutMeAsideItemList}>
                                <TooltipPrimary title='NodeJS'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ NodeLogo }
                                                alt='NodeJS Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='ExpressJS'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ ExpressLogo }
                                                alt='Express Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='NestJS'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ NestLogo }
                                                alt='Nest Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='DenoJS'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ DenoLogo }
                                                alt='Deno Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>
                            </ul>
                        </li>

                        <li className={stylesHome.homeAboutMeAsideItem}>
                            <h5>
                                {
                                    props.content.language === 'fa'
                                        ?
                                        props.content.services[2].title.split(' ')[1]
                                        :
                                        props.content.services[2].title.split(' ')[0]
                                }:
                            </h5>

                            <ul className={stylesHome.homeAboutMeAsideItemList}>
                                <TooltipPrimary title='ElectronJS'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ ElectronLogo }
                                                alt='Electron Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='React Native'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ ReactNativeLogo }
                                                alt='React Native Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>

                                <TooltipPrimary title='Qt'>
                                    <li>
                                        <span>
                                            <Image
                                                src={ QtLogo }
                                                alt='QT Logo'
                                                layout='fill'
                                            />
                                        </span>
                                    </li>
                                </TooltipPrimary>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h4 className='heading'>
                    { props.content.titles[1] }
                </h4>
                <div className={stylesHome.homeServices}>
                    {
                        props.content.services.map((service: iService) =>
                            <ServiceCard
                                key={ service.id }
                                service={ service }
                                text={ props.content.order_now }
                            />
                        )
                    }
                </div>

                <h4 className='heading'>
                    {props.content.titles[7]}
                </h4>
                <div className={stylesHome.homeRepositories}>
                    <Swiper
                        navigation={{
                            prevEl: nextRef.current,
                            nextEl: prevRef.current,
                        }}
                        modules={[ Keyboard, Autoplay, Navigation ]}
                        keyboard={{ enabled: true }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        spaceBetween={ 20 }
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            650: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 }
                        }}
                    >
                        {
                            repositories.map((repository: iRepository) =>
                                (
                                    <SwiperSlide key={ repository.node_id }>
                                        <RepositoriesCard
                                            repository={ repository }
                                        />
                                    </SwiperSlide>
                                ))
                        }

                        <div className={stylesHome.homeRepositoriesPrevNext}>
                            <div ref={nextRef}>
                                <BiChevronLeft />
                            </div>
                            <div ref={prevRef}>
                                <BiChevronRight />
                            </div>
                        </div>
                    </Swiper>
                </div>

                <div className={stylesHome.homeOrgans}>
                    <Swiper
                        modules={[ Keyboard, Autoplay ]}
                        keyboard={{ enabled: true }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        spaceBetween={ 20 }
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            450: { slidesPerView: 2 },
                            650: { slidesPerView: 3 },
                            1400: { slidesPerView: 5 }
                        }}
                    >
                        {
                            organs.map((organ: iOrgan) =>
                                (
                                    <SwiperSlide key={ organ.node_id }>
                                        <TooltipPrimary title={ organ.login }>
                                            <a href={`https://github.com/${ organ.login }`} target='_blank' className={stylesHome.homeOrgansContent} rel="noreferrer">
                                                <Image
                                                    src={ organ.avatar_url }
                                                    alt={ organ.login }
                                                    width={120}
                                                    height={120}
                                                />
                                            </a>
                                        </TooltipPrimary>
                                    </SwiperSlide>
                                ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Home;
