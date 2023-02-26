import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, Fragment } from 'react';

import type { ILanguages } from '../../../types/language';
import type { IContent } from '../../../interfaces/content';

import stylesNav from '../../../styles/components/nav.module.scss';
import stylesMain from '../../../styles/components/main.module.scss';
import stylesAlert from '../../../styles/components/alert.module.scss';
import stylesFilter from '../../../styles/components/filter.module.scss';
import stylesProjects from '../../../styles/pages/projects.module.scss';

import data from '../../../../public/static/data/data.json';

import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { toggleAside, toggleFilter, toggleNavbar, projectPopup } from '../../../redux/features/layout/layout-slice';

const Aside = dynamic(() => import('../aside/aside.component'));
const Navbar = dynamic(() => import('../navbar/navbar.component'));
const Footer = dynamic(() => import('../footer/footer.component'));

type Props =
    {
        children: ReactNode
    };

const Main = ({ children }: Props) =>
{
    const router = useRouter();
    const dispatch = useAppDispatch();

    const filter = useAppSelector(state => state.layout.filter);
    const project = useAppSelector(state => state.layout.project.popup);

    const content = data[router.locale as ILanguages] as IContent;

    useEffect(() =>
    {
        (
            async() =>
            {
                try
                {
                    await axios.get('/fingerprint');
                }
                catch (exception)
                {
                    console.log(exception);
                }
            }
        )();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Parsa Firoozi &mdash; Full-Stack Developer & Graphic Designer</title>

                <meta charSet='UTF-8' />

                <link rel='icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                <link rel='apple-touch-icon' href='https://parsa-firoozi.ir/static/images/favicon.png'/>
                <link rel='manifest' href='https://parsa-firoozi.ir/static/manifest.json'/>

                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='language' content={ content.language }/>
                <meta name='Classification' content='Portfolio'/>
                <meta name='subject' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta name='description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio, Full-Stack Developer, Graphic Designer'/>
                <meta name='author' content='Parsa Firoozi'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

                <meta property='theme-color' content='#5294E2'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Full-Stack Developer & Graphic Designer'/>
                <meta property='twitter:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>
            </Head>
            {
                filter
                    ?
                    <span
                        className={stylesFilter.filter}
                        onClick={() =>
                        {
                            dispatch(toggleAside(false));
                            dispatch(toggleNavbar(false));
                            dispatch(toggleFilter(false));
                            dispatch(projectPopup({ open: false }));
                        }}
                    />
                    : null
            }
            {
                project.open && project.image && project.title
                    ?
                    <Fragment>
                        <div className={classnames(stylesFilter.filter, stylesFilter.filterPlus, 'z-index__104')} onClick={() => dispatch(projectPopup({ open: false }))}/>
                        <div className={stylesProjects.projectsImage}>
                            <nav>
                                <div className={stylesNav.navMobileHamburgerOpen} onClick={() => dispatch(projectPopup({ open: false }))}>
                                    <div className={stylesNav.navMobileHamburgerOpenLine}>&nbsp;</div>
                                </div>
                            </nav>
                            <Image
                                onClick={() => dispatch(projectPopup({ open: false }))}
                                src={ project.image }
                                alt={ project.title }
                                layout='fill'
                            />
                        </div>
                    </Fragment>
                    : null
            }

            <Aside />
            <Navbar mobile={ true }/>
            <Navbar />
            <main className={stylesMain.main}>
                <Link href='/blogs/mahsa_amini' legacyBehavior>
                    <a className={stylesAlert.alert}>
                        { content.alert }
                    </a>
                </Link>
                <div className={stylesMain.mainContent}>
                    <span className={stylesMain.mainBackground}/>
                    { children }
                </div>
                <Footer />
            </main>
        </Fragment>
    );
};

export default Main;
