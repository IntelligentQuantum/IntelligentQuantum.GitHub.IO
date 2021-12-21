import React from "react";
import ButtonSecondary from "../../UI/ButtonSecondary.component";
import { AddClass, EditImg } from "../../../Utils/Utils.service";

const PortfolioCard = (props: { text: string, work: { img: string, title: string, tag: string, description: string, link: string }}) =>
{
    return (
        <div className={`portfolio__item--card portfolio__item active ${props.work.tag}`}>
            <img src={props.work.img} alt={props.work.title}/>
            <i className='bi-arrows-fullscreen' onClick={() => { EditImg('#portfolio__image', props.work.img, props.work.title); AddClass('.portfolio__image', 'active'); AddClass('.filter__plus', 'active'); AddClass('.filter', 'z-index__104'); }}/>
            <div className="portfolio__item--box">
                <h2>
                    {props.work.title}
                </h2>
                <p>
                    {props.work.description}
                </p>
                <ButtonSecondary
                    a={true}
                    link={props.work.link}
                    text={props.text}
                />
            </div>
        </div>
    );
};

export default PortfolioCard;
