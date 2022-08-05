import React from 'react';
import Link from 'next/link';

import stylesButton from '../../styles/components/button.module.scss';

import ArrowKeyboardRight from '../../public/static/icons/icon-arrow_keyboard_right.svg';

const ButtonSecondary = (props: { a?: boolean, link: string, text: string }) =>
    (
        props.a
            ? (
                <a target='_blank' rel='noreferrer' href={props.link} className={stylesButton.buttonSecondary} id='button-secondary'>
                    {props.text}
                    <ArrowKeyboardRight />
                </a>
            )
            : (
                <Link href={props.link}>
                    <a className={stylesButton.buttonSecondary} id='button-secondary'>
                        {props.text}
                        <ArrowKeyboardRight />
                    </a>
                </Link>
            )
    );

export default ButtonSecondary;
