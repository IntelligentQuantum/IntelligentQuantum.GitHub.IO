import React from "react";
import { Link } from 'react-router-dom';

const ButtonSecondary = (props: any) =>
{
    let MainEl;

    if (props.a)
    {
        MainEl =
            <a rel="noreferrer" target="_blank" href={props.link} className="button-secondary">
                {props.text}
                <svg>
                    <use xlinkHref="/svg/sprite.svg#icon-keyboard_arrow_right"/>
                </svg>
            </a>
    }
    else
    {
        MainEl =
            <Link to={props.link} className="button-secondary">
                {props.text}
                <svg>
                    <use xlinkHref="/svg/sprite.svg#icon-keyboard_arrow_right"/>
                </svg>
            </Link>
    }

    return (MainEl);
};

export default ButtonSecondary;
