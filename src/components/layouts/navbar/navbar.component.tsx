import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { GiMoonBats } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { BsCloudMoonFill, BsSunFill } from 'react-icons/bs';

import type { ITheme } from '../../../types/theme';
import type { IContent } from '../../../interfaces/content';

import stylesNav from '../../../styles/components/nav.module.scss';

import Ellipsis from '../../../../public/static/icons/icon-ellipsis.svg';

import { setOpenAside } from '../../../app/aside/aside.actions';
import { setOpenNavbar } from '../../../app/navbar/navbar.actions';
import { setActiveFilter } from '../../../app/filter/filter.actions';

const Navbar = (props: { content: IContent, theme?: ITheme, handleTheme: (theme?: ITheme) => void, mobile?: boolean, page?: 'home' | 'contact' | 'hobbies' | 'portfolio' | 'blogs' }) =>
{
    const dispatch = useDispatch();

    const openAside: boolean = useSelector((state: any) => state.aside.openAside);
    const openNavbar: boolean = useSelector((state: any) => state.navbar.openNavbar);
    const activeFilter: boolean = useSelector((state: any) => state.filter.activeFilter);

    return (
        props.mobile
            ?
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
            :
            <nav className={classnames(stylesNav.nav, 'z-index__101', (openNavbar ? stylesNav.nav__Open : null))}>
                <div className={stylesNav.navHamburger} onClick={() =>
                {
                    dispatch(setOpenNavbar(!openNavbar)); dispatch(setActiveFilter(!activeFilter));
                }}>
                    <div className={stylesNav.navHamburgerLine} data-open={openNavbar}>&nbsp;</div>
                </div>

                <div className={stylesNav.navContent}>
                    <div className={stylesNav.navContentActive} data-open={openNavbar}>
                        <p>{ props.content && props.page ? props.content[props.page] : null }</p>
                    </div>

                    <div className={stylesNav.navContentList} data-open={openNavbar}>
                        <Link href='/' passHref>
                            <a data-active={props.page === 'home'} className={stylesNav.navContentItem}>
                                {props.content.home}
                            </a>
                        </Link>
                        <Link href='/portfolio' passHref>
                            <a data-active={props.page === 'portfolio'} className={stylesNav.navContentItem}>
                                {props.content.portfolio}
                            </a>
                        </Link>
                        <Link href='/contact' passHref>
                            <a data-active={props.page === 'contact'} className={stylesNav.navContentItem}>
                                {props.content.contact}
                            </a>
                        </Link>
                        <Link href='/hobbies' passHref>
                            <a data-active={props.page === 'hobbies'} className={stylesNav.navContentItem}>
                                {props.content.hobbies}
                            </a>
                        </Link>
                        <Link href='/blogs' passHref>
                            <a data-active={props.page === 'blogs'} className={stylesNav.navContentItem}>
                                {props.content.blogs}
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={stylesNav.navThemes}>
                    <span onClick={() => props.handleTheme('dark')} className={props.theme === 'dark' ? stylesNav.navThemes__Active : ''}>
                        <GiMoonBats />
                    </span>
                    <span onClick={() => props.handleTheme('dim')} className={props.theme === 'dim' ? stylesNav.navThemes__Active : ''}>
                        <BsCloudMoonFill />
                    </span>
                    <span onClick={() => props.handleTheme('light')} className={props.theme === 'light' ? stylesNav.navThemes__Active : ''}>
                        <BsSunFill />
                    </span>
                </div>
            </nav>
    );
};

export default Navbar;
