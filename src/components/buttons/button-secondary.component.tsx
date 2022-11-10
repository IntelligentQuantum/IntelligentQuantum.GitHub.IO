import React from 'react';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

import stylesButton from '../../styles/components/button.module.scss';

const ButtonSecondary = (props: { a?: boolean, link: string, text: string }) =>
    (
        props.a
            ?
            <a target='_blank' rel='noreferrer' href={ props.link } className={stylesButton.buttonSecondary} id='button-secondary'>
                { props.text }
                <BiChevronRight />
            </a>
            :
            <Link href={props.link} legacyBehavior>
                <a className={stylesButton.buttonSecondary} id='button-secondary'>
                    { props.text }
                    <BiChevronRight />
                </a>
            </Link>
    );

export default ButtonSecondary;
