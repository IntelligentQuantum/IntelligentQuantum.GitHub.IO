import React from "react";
import { Link } from 'react-router-dom';

const ButtonSecondary = (props: any) =>
{
    return (
        <Link to={props.link} className="button-secondary">
            {props.text}
            <svg>
                <use xlinkHref="/svg/sprite.svg#icon-keyboard_arrow_right"/>
            </svg>
        </Link>
    );
};

export default ButtonSecondary;
