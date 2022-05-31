import Link from 'next/link';

import stylesButton from '../../styles/components/button.module.scss';

import ArrowKeyboardRight from '../../assets/icons/icon-arrow_keyboard_right.svg';

const ButtonSecondary = (props: any) =>
{
    return (
        <Link href={props.link}>
            <a className={stylesButton.buttonSecondary} id='buttonSecondary'>
                {props.text}
                <ArrowKeyboardRight />
            </a>
        </Link>
    );
};

export default ButtonSecondary;
