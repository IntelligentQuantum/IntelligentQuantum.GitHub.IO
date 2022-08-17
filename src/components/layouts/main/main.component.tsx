import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

import type { IContent } from '../../../interfaces/content';

import stylesMain from '../../../styles/components/main.module.scss';

const Footer = dynamic(() => import('../footer/footer.component'));

const Main = (props: { content: IContent, children: ReactNode }) =>
    (
        <main className={stylesMain.main}>
            <div className={stylesMain.mainContent}>
                <span className={stylesMain.mainBackground}/>
                { props.children }
            </div>
            <Footer content={ props.content }/>
        </main>
    );

export default Main;
