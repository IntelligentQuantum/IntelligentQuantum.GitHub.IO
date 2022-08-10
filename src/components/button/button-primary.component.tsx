import React from 'react';
import Link from 'next/link';

import stylesButton from '../../styles/components/button.module.scss';

import ArrowKeyboardRight from '../../../public/static/icons/icon-arrow_keyboard_right.svg';

const ButtonPrimary = (props: { link: string, text: string }) =>
    (
        <Link href={props.link}>
            <a className={stylesButton.buttonSecondary} id='buttonSecondary'>
                {props.text}
                <ArrowKeyboardRight />
            </a>
        </Link>
    );

export default ButtonPrimary;
