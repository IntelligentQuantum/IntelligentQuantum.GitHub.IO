import Link from 'next/link';

const ButtonSecondary = (props: any) =>
{
    return (
        props.a
            ?
            <a rel='noreferrer' target='_blank' href={props.link} className='button-secondary'>
                {props.text}
                <svg>
                    <use xlinkHref='/svg/sprite.svg#icon-keyboard_arrow_right'/>
                </svg>
            </a>
            :
            <Link href={props.link}>
                <a className='button-secondary'>
                    {props.text}
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-keyboard_arrow_right'/>
                    </svg>
                </a>
            </Link>
    );
};

export default ButtonSecondary;
