import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { FaEllipsisV } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCloudMoonFill, BsSunFill } from 'react-icons/bs';

import type { IPage } from '../../../types/page';
import type { ITheme } from '../../../types/theme';
import type { IContent } from '../../../interfaces/content';

import stylesNav from '../../../styles/components/nav.module.scss';

import { selectAsideOpen, selectNavbarOpen } from '../../../store/features/header-slice';
import { toggleNavbar, toggleFilter, toggleAside } from '../../../store/features/header-slice';

const Navbar = (props: { content: IContent, mobile?: boolean }) =>
{
    const router = useRouter();
    const dispatch = useDispatch();

    const page = router.pathname.split('/')[1];

    const [theme, setTheme] = useState<ITheme>('dim');

    const openAside = useSelector(selectAsideOpen);
    const navbarOpen = useSelector(selectNavbarOpen);

    const handleClickAside = () =>
    {
        dispatch(toggleAside(!openAside));
        dispatch(toggleFilter(!openAside));
    };

    const handleClickNavbar = () =>
    {
        dispatch(toggleNavbar(!navbarOpen));
        dispatch(toggleFilter(!navbarOpen));
    };

    const handleTheme = (themeV?: ITheme) =>
    {
        const storageTheme: string = localStorage.getItem('theme') || 'dim';

        if (themeV)
        {
            setTheme(themeV);
            localStorage.setItem('theme', themeV);
        }
        else
        {
            if (storageTheme === 'matrix' || storageTheme === 'dim' || storageTheme === 'light')
            {
                setTheme(storageTheme as ITheme);
                localStorage.setItem('theme', storageTheme);
            }
            else
            {
                setTheme('dim');
                localStorage.setItem('theme', 'dim');
            }
        }
    };

    useEffect(() =>
    {
        handleTheme();
    });

    useEffect(() =>
    {
        const htmlElement: HTMLElement | null = document.querySelector('html');

        if (htmlElement)
            htmlElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        props.mobile
            ?
            <nav className={classnames(stylesNav.navMobile, 'z-index__100')}>
                <div className={stylesNav.navMobileDots} onClick={ handleClickAside } >
                    <FaEllipsisV />
                </div>

                <div className={stylesNav.navMobileHamburger} onClick={ handleClickNavbar }>
                    <div className={classnames(stylesNav.navMobileHamburgerLine, stylesNav.navMobileHamburgerLineOpen)}>&nbsp;</div>
                </div>
            </nav>
            :
            <nav className={classnames(stylesNav.nav, 'z-index__101', (navbarOpen ? stylesNav.nav__Open : null))}>
                <div className={stylesNav.navHamburger} onClick={ handleClickNavbar }>
                    <div className={stylesNav.navHamburgerLine} data-open={navbarOpen}>&nbsp;</div>
                </div>

                <div className={stylesNav.navContent}>
                    <div className={stylesNav.navContentActive} data-open={navbarOpen}>
                        <p>{ props.content && page ? props.content[page as IPage] : null }</p>
                    </div>

                    <div className={stylesNav.navContentList} data-open={navbarOpen}>
                        <Link href='/' passHref>
                            <a data-active={page === 'home'} className={stylesNav.navContentItem}>
                                {props.content.home}
                            </a>
                        </Link>
                        <Link href='/portfolio' passHref>
                            <a data-active={page === 'portfolio'} className={stylesNav.navContentItem}>
                                {props.content.portfolio}
                            </a>
                        </Link>
                        <Link href='/contact' passHref>
                            <a data-active={page === 'contact'} className={stylesNav.navContentItem}>
                                {props.content.contact}
                            </a>
                        </Link>
                        <Link href='/hobbies' passHref>
                            <a data-active={page === 'hobbies'} className={stylesNav.navContentItem}>
                                {props.content.hobbies}
                            </a>
                        </Link>
                        <Link href='/blogs' passHref>
                            <a data-active={page === 'blogs'} className={stylesNav.navContentItem}>
                                {props.content.blogs}
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={stylesNav.navThemes}>
                    <span onClick={() => handleTheme('dim')} className={theme === 'dim' ? stylesNav.navThemes__Active : ''}>
                        <BsCloudMoonFill />
                    </span>
                    <span onClick={() => handleTheme('light')} className={theme === 'light' ? stylesNav.navThemes__Active : ''}>
                        <BsSunFill />
                    </span>
                </div>
            </nav>
    );
};

export default Navbar;
