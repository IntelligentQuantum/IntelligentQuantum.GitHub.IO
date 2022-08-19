import { useState, useEffect } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { toggleNavbar, toggleFilter } from '../../../redux/features/header/header-slice';

import { BsMoonFill, BsCloudMoonFill, BsSunFill } from 'react-icons/bs';

import styles from './nav.module.scss';

const Nav = () =>
{
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
                <div className={styles.navHamburgerLine}>&nbsp;</div>
            </div>

            <div className={styles.navContent}>
                <Link href='/src/pages'>
                    <a className={styles.navContentActive}>Home</a>
                </Link>
            </div>

            <div className={styles.navTheme}>
                <span onClick={() => handleClickTheme('dark')} className={`${ colorTheme === 'dark' ? styles.navThemeActive : null }`}>
                    <BsMoonFill />
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
