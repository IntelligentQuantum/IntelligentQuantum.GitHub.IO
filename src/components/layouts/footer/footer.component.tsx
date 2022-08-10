import React from 'react';

import type { IContent } from '../../../interfaces/content';

import stylesFooter from '../../../styles/components/footer.module.scss';

import Github from '../../../public/static/icons/icon-github.svg';

const Footer = (props: { content: IContent }) =>
    (
        <footer className={stylesFooter.footer}>
            <div className={stylesFooter.footerBox}>
                <div>
                    © 2021 {props?.content?.my_name}
                </div>

                <a href='https://github.com/im-parsa/im-parsa.github.io' target='_blank' rel='noreferrer'>
                    <Github />
                    {props?.content?.source_code}
                </a>
            </div>
        </footer>
    );

export default Footer;
