import React from "react";
import ButtonSecondary from "../../UI/ButtonSecondary.component";

const ServiceCard = (props: { text: string, service: { title: string, description: string }}) =>
{
    return (

        <div className="home__services--content">
            <h5>{props.service.title}</h5>
            <p>
                {props.service.description}
            </p>
            <ButtonSecondary
                link='/portfolio'
                text={props.text}
            />
        </div>
    );
};

export default ServiceCard;
