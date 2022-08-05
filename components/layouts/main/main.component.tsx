import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

import type { IContent } from '../../../interfaces/content';

import stylesMain from '../../../styles/components/main.module.scss';

const Footer = dynamic(() => import('../footer/footer.component'));

const Main = (props: { content: IContent, children: ReactNode }) =>
    (
        <main className={stylesMain.main}>
            { props.children }
            <Footer content={props?.content}/>
        </main>
    );

export default Main;
