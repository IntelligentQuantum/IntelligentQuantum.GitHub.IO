import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

import type { iContent } from '../../../interfaces/content';

import stylesMain from '../../../styles/components/main.module.scss';

const Footer = dynamic(() => import('../footer/footer.component'));

const Main = (props: { content: iContent, children: ReactNode }) =>
    (
        <section className={stylesMain.main}>
            <div className={stylesMain.mainContent}>
                <span className={stylesMain.mainBackground}/>

                { props.children }
            </div>

            <Footer content={ props.content }/>
        </section>
    );

export default Main;
