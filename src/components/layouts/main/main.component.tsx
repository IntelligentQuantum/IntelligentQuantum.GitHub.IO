import { ReactNode } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { toggleNavbar, toggleAside, toggleFilter } from '@/redux/features/header/header-slice';

import Footer from '../footer/footer.component';

import { FaEllipsisV } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './main.module.scss';

interface MainProps
{
    children?: ReactNode;
}

const Main = ({ children }: MainProps) =>
{
    const filterOpen = useAppSelector(state => state.header.filterOpen);
    const asideOpen = useAppSelector(state => state.header.asideOpen);
    const dispatch = useAppDispatch();

    const handleToggleAsideClick = () =>
    {
        dispatch(toggleAside());
        dispatch(toggleFilter());
    };

    const handleToggleNavbarClick = () =>
    {
        dispatch(toggleNavbar());
        dispatch(toggleFilter());
    };

    return (
        <main className={styles.main}>
            { filterOpen ? (<div onClick={asideOpen ? handleToggleAsideClick : handleToggleNavbarClick} className={styles.mainFilter} />) : null }
            <div className={styles.mainHandleToggle}>
                <span onClick={handleToggleAsideClick}>
                    <FaEllipsisV />
                </span>
                <span onClick={handleToggleNavbarClick}>
                    <GiHamburgerMenu />
                </span>
            </div>
            <div className={styles.mainBackground} />
            { children }
            <Footer />
        </main>
    );
};

export default Main;
