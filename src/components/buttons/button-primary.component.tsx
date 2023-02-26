import React from 'react';
import Link from 'next/link';

import styles from '../../styles/components/button.module.scss';

import ArrowKeyboardRight from '../../../public/static/icons/icon-arrow_keyboard_right.svg';

type Props =
    {
        link: string,
        text: string
    };

const ButtonPrimary = ({ link, text }: Props) =>
    (
        <Link href={ link } legacyBehavior>
            <a className={styles.buttonSecondary} id='buttonSecondary'>
                { text }
                <ArrowKeyboardRight />
            </a>
        </Link>
    );

export default ButtonPrimary;
