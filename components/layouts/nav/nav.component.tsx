import Link from 'next/link';
import { WiDaySunny, WiDaySunnyOvercast } from 'react-icons/wi';
import { IoIosMoon } from 'react-icons/io';

import styles from './nav.module.scss';

const Nav = () =>
{
    return (
        <nav className={styles.nav}>
            <div className={styles.navHamburger}>
                <div className={styles.navHamburgerLine}>&nbsp;</div>
            </div>

            <div className={styles.navContent}>
                <Link href='/'>
                    <a className={styles.navContentActive}>Home</a>
                </Link>
            </div>

            <div className={styles.navTheme}>
                <span>
                    <WiDaySunny />
                </span>
                <span>
                    <WiDaySunnyOvercast />
                </span>
                <span className={styles.navThemeActive}>
                    <IoIosMoon />
                </span>
            </div>
        </nav>
    );
};

export default Nav;
