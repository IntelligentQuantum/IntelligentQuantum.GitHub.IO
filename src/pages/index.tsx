import axios from 'axios';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import CountUp from 'react-countup';
import reactHtmlParser from 'html-react-parser';

import type { IService } from '../interfaces/service';
import type { IContent } from '../interfaces/content';
import type { IRepository } from '../interfaces/repository';
import type { IOrganization } from '../interfaces/organization';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tippy.js/dist/tippy.css';
import stylesHome from '../styles/pages/home.module.scss';
import stylesButtons from '../styles/components/button.module.scss';

const TypingEffect = dynamic(() => import('../components/typing-effect'));
const ServiceCard = dynamic(() => import('../components/cards/service-card.component'));
const ScrollMotion = dynamic(() => import('../components/animations/scroll.component'));
const TechnologyCard = dynamic(() => import('../components/cards/technology-card.component'));
const TooltipPrimary = dynamic(() => import('../components/tooltips/tooltip-primary.component'));
const RepositoriesList = dynamic(() => import('../components/lists/repositories-list.component'));
const OrganizationsList = dynamic(() => import('../components/lists/organizations-list.component'));

const Home = (props: { content: IContent, repositories: IRepository[], organizations: IOrganization[] }) =>
{
    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Full-Stack Developer & Graphic Designer</title>
            </Head>

            <section className={stylesHome.home}>
                <ScrollMotion>
                    <header className={stylesHome.homeHeader}>
                        <div className={stylesHome.homeHeaderContent}>
                            <span>{ props.content.titles[0] }</span>
                            <div className={stylesHome.homeHeaderContentDescription}>
                                <span>&lt;<i>code</i>&gt;</span>
                                <TypingEffect words={props.content.typing_effect}/>
                                <span>&lt;/<i>code</i>&gt;</span>
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
                                <p>{ props.content.headers[0] }</p>
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
                                <p>{ props.content.headers[1] }</p>
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
                                <p>{ props.content.headers[2] }</p>
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
                                <p>{ props.content.headers[3] }</p>
                            </div>
                        </div>
                    </header>
                </ScrollMotion>

                <ScrollMotion>
                    <h4 className='heading'>{ props.content.titles[8] }</h4>
                    <div className={stylesHome.homeAboutMe}>
                        <div>
                            {
                                props.content.about_me.split('NEXT_LINE').map((paragraph: string, index: number) =>
                                    (
                                        <h2 key={ nanoid() } className={'paragraph' + (index === 0 ? ' first-letter' : ' text-indent') + (props.content.dir === 'rtl' ? ' text-indent' : '')}>
                                            { reactHtmlParser(index === 0 && props.content.dir === 'rtl'
                                                ? ' &nbsp;' + paragraph
                                                : paragraph
                                            )}
                                        </h2>
                                    ))
                            }
                        </div>

                        <ul className={stylesHome.homeAboutMeAside}>
                            <li className={stylesHome.homeAboutMeAsideItem}><h3>{ props.content.technologies.title }</h3></li>
                            <li className={stylesHome.homeAboutMeAsideItem}>
                                <h5>
                                    {
                                        props.content.language === 'fa'
                                            ? props.content.services[0].title.split(' ')[1]
                                            : props.content.services[0].title.split(' ')[0]
                                    }:
                                </h5>
                                <ul className={stylesHome.homeAboutMeAsideItemList}>
                                    {
                                        props.content.technologies.front_end.map((technology: { title: string, icon: string }, index: number) =>
                                            (
                                                <TooltipPrimary key={ nanoid() } content={ technology.title }>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={ technology.icon }
                                                                alt={ technology.title + ' Logo' }
                                                                layout='fill'
                                                            />
                                                        </span>
                                                    </li>
                                                </TooltipPrimary>
                                            ))
                                    }
                                </ul>
                            </li>
                            <li className={stylesHome.homeAboutMeAsideItem}>
                                <h5>
                                    {
                                        props.content.language === 'fa'
                                            ? props.content.services[1].title.split(' ')[1]
                                            : props.content.services[1].title.split(' ')[0]
                                    }:
                                </h5>
                                <ul className={stylesHome.homeAboutMeAsideItemList}>
                                    {
                                        props.content.technologies.back_end.map((technology: { title: string, icon: string }, index: number) =>
                                            (
                                                <TechnologyCard
                                                    key={ nanoid() }
                                                    index={ index }
                                                    technology={ technology }
                                                />
                                            ))
                                    }
                                </ul>
                            </li>
                            <li className={stylesHome.homeAboutMeAsideItem}>
                                <h5>
                                    {
                                        props.content.language === 'fa'
                                            ? props.content.services[2].title.split(' ')[1]
                                            : props.content.services[2].title.split(' ')[0]
                                    }:
                                </h5>
                                <ul className={stylesHome.homeAboutMeAsideItemList}>
                                    {
                                        props.content.technologies.cross_platform.map((technology: { title: string, icon: string }, index: number) =>
                                            (
                                                <TechnologyCard
                                                    key={ nanoid() }
                                                    index={ index }
                                                    technology={ technology }
                                                />
                                            ))
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </ScrollMotion>

                <ScrollMotion>
                    <h4 className='heading'>{ props.content.titles[1] }</h4>
                    <ul className={stylesHome.homeServices}>
                        {
                            props.content.services.map((service: IService) =>
                                <ServiceCard
                                    key={ service.id }
                                    service={ service }
                                    text={ props.content.order_now }
                                />
                            )
                        }
                    </ul>
                </ScrollMotion>

                <ScrollMotion>
                    <h4 className='heading'>{props.content.titles[7]}</h4>
                    {
                        props.content.dir === 'rtl'
                            ?
                            <>
                                <RepositoriesList dir='rtl' repositories={ props.repositories }/>

                                <OrganizationsList dir='rtl' organizations={ props.organizations }/>
                            </>
                            :
                            <>
                                <RepositoriesList repositories={ props.repositories }/>

                                <OrganizationsList organizations={ props.organizations }/>
                            </>
                    }
                </ScrollMotion>
            </section>
        </>
    );
};

export async function getStaticProps()
{
    const { data: repositories } = await axios.get('/github/repositories');
    const { data: organizations } = await axios.get('/github/organizations');

    if (!repositories || !organizations)
        return { props: { repositories: [], organizations: {} }};

    return {
        props:
            {
                repositories: repositories.items,
                organizations: organizations.items
            },
        revalidate: 86400
    };
};

export default Home;
