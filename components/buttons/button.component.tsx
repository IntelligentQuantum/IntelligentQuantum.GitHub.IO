import Link from 'next/link';

const ButtonSecondary = (props: any) =>
{
    return (
        <Link href={props.link}>
            <a className='button-secondary'>
                {props.text}
                <svg>
                    <use xlinkHref="/svg/sprite.svg#icon-keyboard_arrow_right"/>
                </svg>
            </a>
        </Link>
    );
};

export default ButtonSecondary;
