import React from 'react';
import { useRouter } from 'next/router';
import { BsGithub } from 'react-icons/bs';

import type { ILanguages } from '../../../types/language';
import type { IContent } from '../../../interfaces/content';

import stylesFooter from '../../../styles/components/footer.module.scss';

import data from '../../../../public/static/data/data.json';

const Footer = () =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    return (
        <footer className={stylesFooter.footer}>
            <div className={stylesFooter.footerBox}>
                <div>
                    © 2023 { content.my_name }
                </div>
                <a href='https://github.com/im-parsa/im-parsa.github.io' target='_blank' rel='noreferrer'>
                    <BsGithub />
                    { content.source_code }
                </a>
            </div>
        </footer>
    );
};

export default Footer;
