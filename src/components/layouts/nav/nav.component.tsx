import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { toggleNavbar, toggleFilter } from '@/redux/features/header/header-slice';

import { BsMoonFill, BsCloudMoonFill, BsSunFill } from 'react-icons/bs';
import { GiMoonBats } from 'react-icons/gi';

import styles from './nav.module.scss';

const Nav = () =>
{
    const router = useRouter();
    const [colorTheme, setColorTheme] = useState('dark');

    const navbarOpen = useAppSelector(state => state.header.navbarOpen);
    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        const currentTheme = localStorage.getItem('theme');
        const htmlElement: HTMLElement | null = document.querySelector('html');

        if (currentTheme)
            setColorTheme(currentTheme);

        if (htmlElement)
            htmlElement.setAttribute('data-theme', colorTheme);
    }, [colorTheme]);

    const handleClickTheme = (theme: string) =>
    {
        setColorTheme(theme);
        localStorage.setItem('theme', theme);
    };

    const handleClickNavbar = () =>
    {
        dispatch(toggleNavbar());
        dispatch(toggleFilter());
    };

    return (
        <nav className={classnames(styles.nav, { [styles.navActive]: navbarOpen })}>
            <div className={styles.navHamburger} onClick={handleClickNavbar}>
                <div data-open={navbarOpen} className={styles.navHamburgerLine}>&nbsp;</div>
            </div>

            <div className={styles.navContent}>
                <p
                    data-open={navbarOpen}
                    className={styles.navContentActive}
                >
                    { router.pathname === '/' ? 'HOME' : router.pathname.split('/')[1].toUpperCase() }
                </p>

                <div data-open={navbarOpen} className={styles.navContentList}>
                    <Link href='/' data-open={navbarOpen} className={styles.navContentListItem}>
                        HOME
                    </Link>
                    <Link
                        href='/projects'
                        data-open={navbarOpen}
                        className={styles.navContentListItem}>
                        PROJECTS
                    </Link>
                    <Link
                        href='/contact'
                        data-open={navbarOpen}
                        className={styles.navContentListItem}>
                        CONTACT
                    </Link>
                    <Link
                        href='/hobbies'
                        data-open={navbarOpen}
                        className={styles.navContentListItem}>
                        HOBBIES
                    </Link>
                    <Link
                        href='/blogs'
                        data-open={navbarOpen}
                        className={styles.navContentListItem}>
                        BLOGS
                    </Link>
                </div>
            </div>

            <div data-open={navbarOpen} className={styles.navTheme}>
                <span onClick={() => handleClickTheme('dark')} className={`${ colorTheme === 'dark' ? styles.navThemeActive : null }`}>
                    <BsMoonFill />
                </span>
                <span onClick={() => handleClickTheme('matrix')} className={`${ colorTheme === 'matrix' ? styles.navThemeActive : null }`}>
                    <GiMoonBats />
                </span>
                <span onClick={() => handleClickTheme('ark')} className={`${ colorTheme === 'ark' ? styles.navThemeActive : null }`}>
                    <BsCloudMoonFill />
                </span>
                <span onClick={() => handleClickTheme('light')} className={`${ colorTheme === 'light' ? styles.navThemeActive : null }`}>
                    <BsSunFill />
                </span>
            </div>
        </nav>
    );
};

export default Nav;
