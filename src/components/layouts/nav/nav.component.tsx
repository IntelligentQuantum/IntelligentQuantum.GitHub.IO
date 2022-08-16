import { useState, useEffect } from 'react';
import Link from 'next/link';

import { BsMoonFill, BsCloudMoonFill, BsSunFill } from 'react-icons/bs';

import styles from './nav.module.scss';

const Nav = () =>
{
    const [colorTheme, setColorTheme] = useState('dark');

    useEffect(() =>
    {
        const currentTheme = localStorage.getItem('theme');
        const htmlElement: HTMLElement | null = document.querySelector('html');

        if (currentTheme)
            setColorTheme(currentTheme);

        if (htmlElement)
            htmlElement.setAttribute('data-theme', colorTheme);
    }, [colorTheme]);

    const handleClick = (theme: string) =>
    {
        setColorTheme(theme);
        localStorage.setItem('theme', theme);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navHamburger}>
                <div className={styles.navHamburgerLine}>&nbsp;</div>
            </div>

            <div className={styles.navContent}>
                <Link href='/src/pages'>
                    <a className={styles.navContentActive}>Home</a>
                </Link>
            </div>

            <div className={styles.navTheme}>
                <span onClick={() => handleClick('dark')} className={`${ colorTheme === 'dark' ? styles.navThemeActive : null }`}>
                    <BsMoonFill />
                </span>
                <span onClick={() => handleClick('dim')} className={`${ colorTheme === 'dim' ? styles.navThemeActive : null }`}>
                    <BsCloudMoonFill />
                </span>
                <span onClick={() => handleClick('light')} className={`${ colorTheme === 'light' ? styles.navThemeActive : null }`}>
                    <BsSunFill />
                </span>
            </div>
        </nav>
    );
};

export default Nav;
