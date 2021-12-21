import React from "react";
import ButtonSecondary from "../../UI/ButtonSecondary.component";

const PlanCard = (props: { text: string, content: { currency: string }, plan: { a: string, b: string, c: string, title: string, price: string }}) =>
{
    return (
        <div className="home__plans--content">
            <h5>{props.plan.title}</h5>
            <div>
                {props.plan.price}
                <span>{props.content.currency}</span>
            </div>

            <ul>
                <li>
                    <svg>
                        <use xlinkHref="/svg/sprite.svg#icon-check"/>
                    </svg>
                    <span>{props.plan.a}</span>
                </li>
                <li>
                    <svg>
                        <use xlinkHref="/svg/sprite.svg#icon-check"/>
                    </svg>
                    <span>{props.plan.b}</span>
                </li>
                <li>
                    <svg>
                        <use xlinkHref="/svg/sprite.svg#icon-check"/>
                    </svg>
                    <span>{props.plan.c}</span>
                </li>
            </ul>
            <ButtonSecondary
                link='/contact'
                text={props.text}
            />
        </div>
    );
};

export default PlanCard;
