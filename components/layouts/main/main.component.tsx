import React from 'react';

import Footer from '../footer/footer.component';

import styles from './main.module.scss';

interface MainProps
{
    children?: React.ReactNode;
}

const Main = ({ children }: MainProps) =>
{
    return (
        <main className={styles.main}>
            <div className={styles.mainBackground} />
            { children }
            <Footer />
        </main>
    );
};

export default Main;
