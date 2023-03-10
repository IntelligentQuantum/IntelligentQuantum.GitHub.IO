import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import CountUp from 'react-countup';
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import reactHtmlParser from 'html-react-parser';

import RepositoryService from '../lib/repositories';
import OrganizationService from '../lib/organizations';

import type { IService } from '../interfaces/service';
import type { IContent } from '../interfaces/content';
import type { ILanguages } from '../interfaces/language';
import type { IRepository } from '../interfaces/repository';
import type { IOrganization } from '../interfaces/organization';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tippy.js/dist/tippy.css';
import stylesHome from '../styles/pages/home.module.scss';
import stylesButtons from '../styles/components/button.module.scss';

import data from '../../public/static/data/data.json';
import github from '../../public/static/data/github.json';

const TypingEffect = dynamic(() => import('../components/typing-effect'));
const ServiceCard = dynamic(() => import('../components/cards/service-card.component'));
const ScrollMotion = dynamic(() => import('../components/animations/scroll.component'));
const TechnologyCard = dynamic(() => import('../components/cards/technology-card.component'));
const TooltipPrimary = dynamic(() => import('../components/tooltips/tooltip-primary.component'));
const RepositoriesList = dynamic(() => import('../components/lists/repositories-list.component'));
const OrganizationsList = dynamic(() => import('../components/lists/organizations-list.component'));

type Props =
    {
        repositories: IRepository[],
        organizations: IOrganization[]
    };

const Home = ({ repositories, organizations }: Props) =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    return (
        <Fragment>
            <Head>
                <title>{ content.header.titles[0] }</title>
                <meta name='description' content={ content.header.descriptions[0] }/>
            </Head>

            <section className={stylesHome.home}>
                <ScrollMotion>
                    <header className={stylesHome.homeHeader}>
                        <div className={stylesHome.homeHeaderContent}>
                            <span>{ content.titles[0] }</span>
                            <div className={stylesHome.homeHeaderContentDescription}>
                                <span>&lt;<i>code</i>&gt;</span>
                                <TypingEffect words={content.typing_effect}/>
                                <span>&lt;/<i>code</i>&gt;</span>
                            </div>
                            <Link href='/projects' legacyBehavior>
                                <a className={classnames(stylesButtons.button, 'align-self-start')}>
                                    { content.explore_more }
                                </a>
                            </Link>
                        </div>

                        <ul className={stylesHome.homeHeaderLogs}>
                            <li className={stylesHome.homeHeaderLogsBox}>
                                <span>
                                    <CountUp
                                        start={0}
                                        end={99}
                                        duration={5}
                                    />
                                +
                                </span>
                                <p>{ content.headers[0] }</p>
                            </li>
                            <li className={stylesHome.homeHeaderLogsBox}>
                                <span>
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={5}
                                    />
                                +
                                </span>
                                <p>{ content.headers[1] }</p>
                            </li>
                            <li className={stylesHome.homeHeaderLogsBox}>
                                <span>
                                    <CountUp
                                        start={0}
                                        end={5}
                                        duration={5}
                                    />
                                +
                                </span>
                                <p>{ content.headers[2] }</p>
                            </li>
                            <li className={stylesHome.homeHeaderLogsBox}>
                                <span>
                                    <CountUp
                                        start={0}
                                        end={20}
                                        duration={5}
                                    />
                                +
                                </span>
                                <p>{ content.headers[3] }</p>
                            </li>
                        </ul>
                    </header>
                </ScrollMotion>

                <ScrollMotion>
                    <h4 className='heading'>{ content.titles[8] }</h4>
                    <div className={stylesHome.homeAboutMe}>
                        <div>
                            {
                                content.about_me.split('NEXT_LINE').map((paragraph: string, index: number) =>
                                    (
                                        <h2 key={ uuidV4() } className={'paragraph' + (index === 0 ? ' first-letter' : ' text-indent') + (content.dir === 'rtl' ? ' text-indent' : '')}>
                                            { reactHtmlParser(index === 0 && content.dir === 'rtl'
                                                ? ' &nbsp;' + paragraph
                                                : paragraph
                                            )}
                                        </h2>
                                    ))
                            }
                        </div>

                        <ul className={stylesHome.homeAboutMeAside}>
                            <li className={stylesHome.homeAboutMeAsideItem}><h3>{ content.technologies.title }</h3></li>
                            <li className={stylesHome.homeAboutMeAsideItem}>
                                <h5>
                                    {
                                        content.language === 'fa'
                                            ? content.services[0].title.split(' ')[1]
                                            : content.services[0].title.split(' ')[0]
                                    }:
                                </h5>
                                <ul className={stylesHome.homeAboutMeAsideItemList}>
                                    {
                                        content.technologies.front_end.map((technology: { title: string, icon: string }, index: number) =>
                                            (
                                                <TooltipPrimary key={ uuidV4() } content={ technology.title }>
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
                                        content.language === 'fa'
                                            ? content.services[1].title.split(' ')[1]
                                            : content.services[1].title.split(' ')[0]
                                    }:
                                </h5>
                                <ul className={stylesHome.homeAboutMeAsideItemList}>
                                    {
                                        content.technologies.back_end.map((technology: { title: string, icon: string }, index: number) =>
                                            (
                                                <TechnologyCard
                                                    key={ uuidV4() }
                                                    technology={ technology }
                                                />
                                            ))
                                    }
                                </ul>
                            </li>
                            <li className={stylesHome.homeAboutMeAsideItem}>
                                <h5>
                                    {
                                        content.language === 'fa'
                                            ? content.services[2].title.split(' ')[1]
                                            : content.services[2].title.split(' ')[0]
                                    }:
                                </h5>
                                <ul className={stylesHome.homeAboutMeAsideItemList}>
                                    {
                                        content.technologies.cross_platform.map((technology: { title: string, icon: string }, index: number) =>
                                            (
                                                <TechnologyCard
                                                    key={ uuidV4() }
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
                    <h4 className='heading'>{ content.titles[1] }</h4>
                    <ul className={stylesHome.homeServices}>
                        {
                            content.services.map((service: IService) =>
                                <ServiceCard
                                    key={ uuidV4() }
                                    service={ service }
                                    text={ content.order_now }
                                />
                            )
                        }
                    </ul>
                </ScrollMotion>

                <ScrollMotion>
                    <h4 className='heading'>{ content.titles[7] }</h4>
                    <RepositoriesList dir={ content.dir } repositories={ repositories }/>
                    <OrganizationsList dir={ content.dir } organizations={ organizations }/>
                </ScrollMotion>
            </section>
        </Fragment>
    );
};

export async function getStaticProps()
{
    try
    {
        const repositoryService = new RepositoryService();
        const organizationService = new OrganizationService();

        const { items: repositories } = await repositoryService.GET();
        const { items: organizations } = await organizationService.GET();

        if (!repositories || !organizations)
            return { props: { repositories: github.repos, organizations: github.orgs }};

        return {
            props: { repositories, organizations },
            revalidate: 86400
        };
    }
    catch (error)
    {
        return { props: { repositories: [], organizations: [] }};
    }
}

export default Home;
