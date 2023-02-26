import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { FaEllipsisV } from 'react-icons/fa';
import React, { useEffect, useState} from 'react';
import { BsCloudMoonFill, BsSunFill } from 'react-icons/bs';

import type { IPage } from '../../../types/page';
import type { ITheme } from '../../../types/theme';
import type { ILanguages } from '../../../types/language';
import type { IContent } from '../../../interfaces/content';

import stylesNav from '../../../styles/components/nav.module.scss';

import data from '../../../../public/static/data/data.json';

import { useAppSelector } from '../../../redux/app/hooks';
import { toggleAside, toggleNavbar, toggleFilter } from '../../../redux/features/layout/layout-slice';

type Props =
    {
        mobile?: boolean
    };

const Navbar = ({ mobile }: Props) =>
{
    const router = useRouter();
    const dispatch = useDispatch();

    const page = router.pathname.split('/')[1];

    const [theme, setTheme] = useState<ITheme>('dim');

    const aside: any = useAppSelector(state => state.layout.aside);
    const navbar: any = useAppSelector(state => state.layout.navbar);

    const content = data[router.locale as ILanguages] as IContent;

    const handleClickAside = () =>
    {
        dispatch(toggleAside(!aside));
        dispatch(toggleFilter(!aside));
    };

    const handleClickNavbar = () =>
    {
        dispatch(toggleNavbar(!navbar));
        dispatch(toggleFilter(!navbar));
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
        {
            htmlElement.setAttribute('data-theme', theme);
        }
    }, [theme]);

    return (
        mobile
            ?
            <nav className={classnames(stylesNav.navMobile, 'z-index__100')}>
                <div className={stylesNav.navMobileDots} onClick={ handleClickAside } >
                    <FaEllipsisV />
                </div>
                <div className={stylesNav.navMobileHamburger} onClick={ handleClickNavbar }>
                    <i className={classnames(stylesNav.navMobileHamburgerLine, stylesNav.navMobileHamburgerLineOpen)}>&nbsp;</i>
                </div>
            </nav>
            :
            <nav className={classnames(stylesNav.nav, 'z-index__101', (navbar ? stylesNav.nav__Open : null))}>
                <div className={stylesNav.navHamburger} onClick={ handleClickNavbar }>
                    <span className={stylesNav.navHamburgerLine} data-open={navbar}>&nbsp;</span>
                </div>
                <div className={stylesNav.navContent}>
                    <p className={stylesNav.navContentActive} data-open={navbar}>
                        { content[page as IPage] }
                    </p>
                    <div className={stylesNav.navContentList} data-open={navbar}>
                        <Link href='/' legacyBehavior>
                            <a data-active={!page} className={stylesNav.navContentItem}>
                                {content.home}
                            </a>
                        </Link>
                        <Link href='/projects' legacyBehavior>
                            <a data-active={page === 'projects'} className={stylesNav.navContentItem}>
                                {content.portfolio}
                            </a>
                        </Link>
                        <Link href='/contact/index' legacyBehavior>
                            <a data-active={page === 'contact'} className={stylesNav.navContentItem}>
                                {content.contact}
                            </a>
                        </Link>
                        <Link href='/hobbies/index' legacyBehavior>
                            <a data-active={page === 'hobbies'} className={stylesNav.navContentItem}>
                                {content.hobbies}
                            </a>
                        </Link>
                        <Link href='/blogs' legacyBehavior>
                            <a data-active={page === 'blogs'} className={stylesNav.navContentItem}>
                                {content.blogs}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={stylesNav.navThemes}>
                    <i onClick={() => handleTheme('dim')} className={theme === 'dim' ? stylesNav.navThemes__Active : ''}>
                        <BsCloudMoonFill />
                    </i>
                    <i onClick={() => handleTheme('light')} className={theme === 'light' ? stylesNav.navThemes__Active : ''}>
                        <BsSunFill />
                    </i>
                </div>
            </nav>
    );
};

export default Navbar;
