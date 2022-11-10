import React from 'react';
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';

import stylesButton from '../../styles/components/button.module.scss';

const ButtonSecondary = (props: { a?: boolean, link: string, text: string }) =>
    (
        props.a
            ? (
                <a target='_blank' rel='noreferrer' href={ props.link } className={stylesButton.buttonSecondary} id='button-secondary'>
                    { props.text }
                    <BsChevronRight />
                </a>
            )
            : (
                <Link href={props.link} legacyBehavior>
                    <a className={stylesButton.buttonSecondary} id='button-secondary'>
                        { props.text }
                        <BsChevronRight />
                    </a>
                </Link>
            )
    );

export default ButtonSecondary;
