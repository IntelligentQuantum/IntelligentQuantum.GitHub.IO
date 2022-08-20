import { Fragment, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import useTyped from '../hooks/useTyped';
import Tooltip from '../components/tooltip/tooltip.component';

import services from '../data/services.data';
import { fats } from '../data/fats.data';

import Main from '../components/layouts/main/main.component';

import RepositoryCard from '../components/repository-card/repository-card.component';
import OrganizationCard from '../components/organization-card/organization-card.component';
import ServiceCard from '../components/service-card/service-card.component';

import 'swiper/css';
import styles from '../styles/home.module.scss';

const Home: NextPage = (props: any) =>
{
    const { t } = useTranslation();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const typed = useTyped([
        t('home:typed.0.desktop'),
        t('home:typed.1.web'),
        t('home:typed.2.restfull'),
        t('home:typed.3.games'),
        t('home:typed.4.cyber'),
        t('home:typed.5.languages'),
        t('home:typed.6.frontend'),
        t('home:typed.7.backend'),
        t('home:typed.8.cross'),
    ]);

    return (
        <Fragment>
            <Head>
                <title>IntelligentQuantum &mdash; Full-Stack Developer</title>
            </Head>

            <Main>
                <section className={styles.home}>
                    <header className={styles.homeHeader}>
                        <div className={styles.homeHeaderTop} />
                        <div className={styles.homeHeaderContent}>
                            <h1 className={styles.homeHeaderContentHeading}>{t('home:headers.0.heading')}</h1>

                            <div className={styles.homeHeaderContentDescription}>
                                <div>&lt;<i>code</i>&gt;</div>
                                <span>{ typed }</span>
                                <div>&lt;/<i>code</i>&gt;</div>
                            </div>

                            <Link href='/'>
                                <a className={styles.homeHeaderContentButton}>{t('common:explore')}</a>
                            </Link>
                        </div>

                        <div className={styles.homeHeaderLogs}>
                            <div className={styles.homeHeaderLogsBox}>
                                <span className={styles.homeHeaderLogsBoxNumber}>196+</span>
                                <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.1.customers')}</p>
                            </div>
                            <div className={styles.homeHeaderLogsBox}>
                                <span className={styles.homeHeaderLogsBoxNumber}>198+</span>
                                <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.2.projects')}</p>
                            </div>
                            <div className={styles.homeHeaderLogsBox}>
                                <span className={styles.homeHeaderLogsBoxNumber}>9+</span>
                                <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.3.experience')}</p>
                            </div>
                            <div className={styles.homeHeaderLogsBox}>
                                <span className={styles.homeHeaderLogsBoxNumber}>30+</span>
                                <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.4.honors')}</p>
                            </div>
                        </div>
                    </header>

                    <h4 className={styles.homeHeadingSecondary}>{t('home:about.0.heading')}</h4>
                    <div className={styles.homeAbout}>
                        <h2 className={styles.homeAboutParagraph}>{t('home:about.1.paragraph')}</h2>

                        <ul className={styles.homeAboutFAT}>
                            <li className={styles.homeAboutFATItem}>
                                <h6>{t('home:about.2.fat')}</h6>
                            </li>
                            <li className={styles.homeAboutFATItem}>
                                <h5>Front-End:</h5>

                                <ul className={styles.homeAboutFATItemListLogo}>
                                    {
                                        fats.frontend.map(front =>
                                        {
                                            return (
                                                <Tooltip key={front.id} content={front.name}>
                                                    <li key={front.id} className={styles.homeAboutFATItemListLogoItem}>
                                                        <span>
                                                            <Image
                                                                src={front.src}
                                                                alt={front.alt}
                                                                layout='intrinsic'
                                                                width={25}
                                                                height={25}
                                                            />
                                                        </span>
                                                    </li>
                                                </Tooltip>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                            <li className={styles.homeAboutFATItem}>
                                <h5>Back-End:</h5>
                                <ul className={styles.homeAboutFATItemListLogo}>
                                    {
                                        fats.backend.map(back =>
                                        {
                                            return (
                                                <Tooltip key={back.id} content={back.name}>
                                                    <li key={back.id} className={styles.homeAboutFATItemListLogoItem}>
                                                        <span>
                                                            <Image
                                                                src={back.src}
                                                                alt={back.alt}
                                                                layout='intrinsic'
                                                                width={25}
                                                                height={25}
                                                            />
                                                        </span>
                                                    </li>
                                                </Tooltip>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                            <li className={styles.homeAboutFATItem}>
                                <h5>Cross-Platform:</h5>

                                <ul className={styles.homeAboutFATItemListLogo}>
                                    {
                                        fats.crossPlatforms.map(cross =>
                                        {
                                            return (
                                                <Tooltip key={cross.id} content={cross.name}>
                                                    <li key={cross.id} className={styles.homeAboutFATItemListLogoItem}>
                                                        <span>
                                                            <Image
                                                                src={cross.src}
                                                                alt={cross.alt}
                                                                layout='intrinsic'
                                                                width={25}
                                                                height={25}
                                                            />
                                                        </span>
                                                    </li>
                                                </Tooltip>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <h4 className={styles.homeHeadingPrimary}>{t('home:services.6.heading')}</h4>
                    <div className={styles.homeServices}>
                        {
                            services.map(service =>
                            {
                                return (
                                    <ServiceCard
                                        key={service.id}
                                        title={t(service.title)}
                                        description={t(service.description)}
                                    />
                                );
                            })
                        }
                    </div>

                    <h4 className={styles.homeHeadingPrimary}>Github Repository</h4>
                    <div className={styles.homeRepositories}>
                        <Swiper
                            modules={[Keyboard, Autoplay, Navigation]}
                            keyboard={{ enabled: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            navigation={{
                                prevEl: nextRef.current,
                                nextEl: prevRef.current,
                            }}
                            spaceBetween={ 20 }
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                650: { slidesPerView: 2 },
                                1400: { slidesPerView: 3 }
                            }}
                        >
                            {
                                props.repositories.map((repository: any) =>
                                {
                                    return (
                                        <SwiperSlide key={repository.id}>
                                            <RepositoryCard
                                                name={repository.name}
                                                description={repository.description}
                                                stars={repository.stargazers_count}
                                                watchers={repository.watchers_count}
                                                forks={repository.forks}
                                            />
                                        </SwiperSlide>
                                    );
                                })
                            }
                            <div className={styles.homeRepositoriesPrevNext}>
                                <div ref={nextRef}><BiChevronLeft /></div>
                                <div ref={prevRef}><BiChevronRight /></div>
                            </div>
                        </Swiper>
                    </div>

                    <div className={styles.homeOrganizations}>
                        <Swiper
                            modules={[Keyboard, Autoplay]}
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
                                props.organizations.map((organization: any) =>
                                {
                                    return (
                                        <SwiperSlide style={{ display: 'flex', justifyContent: 'space-evenly' }} key={organization.node_id}>
                                            <OrganizationCard
                                                login={organization.login}
                                                avatarUrl={organization.avatar_url}
                                            />
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                </section>
            </Main>
        </Fragment>
    );
};

export async function getStaticProps()
{
    const repositories = await axios.get('https://api.github.com/users/IntelligentQuantum/repos');
    const organizations = await axios.get('https://api.github.com/users/IntelligentQuantum/orgs');

    if (!repositories.data || !organizations.data)
        return { notFound: true };

    return {
        props:
        {
            repositories: repositories.data,
            organizations: organizations.data
        },
        revalidate: 86400 // 1 day
    };
}

export default Home;
