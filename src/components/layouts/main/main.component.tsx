import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { toggleAside, toggleFilter } from '../../../redux/features/header/header-slice';

import Footer from '../footer/footer.component';

import { FaEllipsisV } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './main.module.scss';

interface MainProps
{
    children?: React.ReactNode;
}

const Main = ({ children }: MainProps) =>
{
    const filterOpen = useAppSelector(state => state.header.filterOpen);
    const dispatch = useAppDispatch();

    const handleToggleClick = () =>
    {
        dispatch(toggleAside());
        dispatch(toggleFilter());
    };

    return (
        <main className={styles.main}>
            { filterOpen ? (<div onClick={handleToggleClick} className={styles.mainFilter} />) : null }
            <div className={styles.mainHandleToggle}>
                <span onClick={handleToggleClick}>
                    <FaEllipsisV />
                </span>
                <span>
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
