import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import type { IContent } from '../../../interfaces/content';

import Dim from '../../../public/static/icons/icon-theme_dim.svg';
import Dark from '../../../public/static/icons/icon-theme_dark.svg';
import Light from '../../../public/static/icons/icon-theme_light.svg';
import Ellipsis from '../../../public/static/icons/icon-ellipsis.svg';

import { setOpenAside } from '../../../app/aside/aside.actions';
import { setOpenNavbar } from '../../../app/navbar/navbar.actions';
import { setActiveFilter } from '../../../app/filter/filter.actions';

import stylesNav from '../../../styles/components/nav.module.scss';

const Navbar = (props: { content: IContent, theme?: 'dark' | 'dim' | 'light', handleTheme: (theme: string) => void, mobile?: boolean, page?: 'home' | 'contact' | 'funny' | 'portfolio' | 'blogs' }) =>
{
    const dispatch = useDispatch();
    const openAside: boolean = useSelector((state: any) => state.aside.openAside);
    const openNavbar: boolean = useSelector((state: any) => state.navbar.openNavbar);
    const activeFilter: boolean = useSelector((state: any) => state.filter.activeFilter);

    return (
        props.mobile
            ? (
                <nav className={classnames(stylesNav.navMobile, 'z-index__100')}>
                    <div className={stylesNav.navMobileDots} onClick={() =>
                    {
                        dispatch(setOpenAside(!openAside)); dispatch(setActiveFilter(!activeFilter));
                    }}>
                        <Ellipsis />
                    </div>
                    <div className={stylesNav.navMobileHamburger} onClick={() =>
                    {
                        dispatch(setOpenNavbar(!openNavbar)); dispatch(setActiveFilter(!activeFilter));
                    }}>
                        <div className={classnames(stylesNav.navMobileHamburgerLine, stylesNav.navMobileHamburgerLineOpen)}>&nbsp;</div>
                    </div>
                </nav>
            )
            : (
                <nav className={classnames(stylesNav.nav, 'z-index__101', (openNavbar ? stylesNav.nav__Open : null))}>
                    <div className={stylesNav.navHamburger} onClick={() =>
                    {
                        dispatch(setOpenNavbar(!openNavbar)); dispatch(setActiveFilter(!activeFilter));
                    }}>
                        <div className={stylesNav.navHamburgerLine} data-open={openNavbar ? 'true' : 'false'}>&nbsp;</div>
                    </div>

                    <div className={stylesNav.navContent}>
                        <div className={stylesNav.navContentActive} data-open={openNavbar ? 'true' : 'false'}>
                            <p>
                                { props?.content && props?.page ? props?.content[props?.page] : null }
                            </p>
                        </div>

                        <div className={stylesNav.navContentList} data-open={openNavbar ? 'true' : 'false'}>
                            <Link href='/' passHref>
                                <a data-active={props.page === 'home' ? 'true' : 'false'} className={stylesNav.navContentItem}>
                                    {props?.content?.home}
                                </a>
                            </Link>
                            <Link href='/portfolio' passHref>
                                <a data-active={props.page === 'portfolio' ? 'true' : 'false'} className={stylesNav.navContentItem}>
                                    {props?.content?.portfolio}
                                </a>
                            </Link>
                            <Link href='/contact' passHref>
                                <a data-active={props.page === 'contact' ? 'true' : 'false'} className={stylesNav.navContentItem}>
                                    {props?.content?.contact}
                                </a>
                            </Link>
                            <Link href='/funny' passHref>
                                <a data-active={props.page === 'funny' ? 'true' : 'false'} className={stylesNav.navContentItem}>
                                    {props?.content?.funny}
                                </a>
                            </Link>
                            <Link href='/blogs' passHref>
                                <a data-active={props.page === 'blogs' ? 'true' : 'false'} className={stylesNav.navContentItem}>
                                    {props?.content?.blogs}
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={stylesNav.navThemes} data-open={openNavbar ? 'true' : 'false'}>
                        <span onClick={() => props.handleTheme('dark')} className={props?.theme === 'dark' ? stylesNav.navThemesActive : ''}>
                            <Dark />
                        </span>
                        <span onClick={() => props.handleTheme('dim')} className={props?.theme === 'dim' ? stylesNav.navThemesActive : ''}>
                            <Dim />
                        </span>
                        <span onClick={() => props.handleTheme('light')} className={props?.theme === 'light' ? stylesNav.navThemesActive : ''}>
                            <Light />
                        </span>
                    </div>
                </nav>
            )
    );
};

export default Navbar;
