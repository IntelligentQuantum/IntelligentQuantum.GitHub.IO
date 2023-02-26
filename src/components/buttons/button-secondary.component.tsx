import React from 'react';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

import styles from '../../styles/components/button.module.scss';

type Props =
    {
        a?: boolean,
        link: string,
        text: string
    };

const ButtonSecondary = ({ a, link, text }: Props) =>
    (
        a
            ?
            <a target='_blank' rel='noreferrer' href={ link } className={styles.buttonSecondary} id='button-secondary'>
                { text }
                <BiChevronRight />
            </a>
            :
            <Link href={ link } legacyBehavior>
                <a className={styles.buttonSecondary} id='button-secondary'>
                    { text }
                    <BiChevronRight />
                </a>
            </Link>
    );

export default ButtonSecondary;
