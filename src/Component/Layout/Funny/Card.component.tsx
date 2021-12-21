import React from "react";

const FunnyCard = (props: { fact: { title: string, description: string, type: string }}) =>
{
    let Image;

    if (props.fact.type === "football")
    {
        Image =
            <div className='funny__header--content__images--img hover'>
                <img className="one" src='/img/funny/Antoine_Griezmann.png' alt='Antoine Griezmann'/>
                <img className='two' src='/img/funny/Lionel_Messi.png' alt='Lionel Messi'/>
            </div>
    }
    else if (props.fact.type === "instagram")
    {
        Image =
            <div className='funny__header--content__images--img__instagram'>
                <img src='/img/funny/Instagram.png' alt='Instagram'/>
            </div>
    }
    else if (props.fact.type === "discord")
    {
        Image =
            <div className='funny__header--content__images--img__discord'>
                <img src='/img/funny/Discord.png' alt='Discord'/>
            </div>
    }
    else if (props.fact.type === "cod")
    {
        Image =
            <div className='funny__header--content__images--img hover'>
                <img className='one' src='/img/funny/Azur.png' alt='Azur'/>
                <img className="two" src='/img/funny/Ghost_Reckoner.png' alt='Ghost Reckoner'/>
            </div>
    }
    else if (props.fact.type === "music")
    {
        Image =
            <div className='funny__header--content__images--img hover'>
                <img className="three" src='/img/funny/Shadmehr_Aghili.png' alt='Shadmehr Aghili'/>
            </div>
    }
    else if (props.fact.type === "guitar")
    {
        Image =
            <div className='funny__header--content__images--img hover'>
                <img className="four" src='/img/funny/Guitar.png' alt='Guitar'/>
            </div>
    }
    else if (props.fact.type === "space")
    {
        Image =
            <div className='funny__header--content__images--img hover'>
                <img className="four" src='/img/funny/Astronaut.png' alt='Astronaut'/>
            </div>
    }

    return (
        <section className="funny__header">
            <div className={`funny__header--content ${props.fact.type}`}>
                <div className='funny__header--content__box'>
                    <h1>{props.fact.title}</h1>
                    <br/><br/>
                    <div className={`funny__header--content__description ${props.fact.type}`}>
                        {props.fact.description}
                    </div>
                </div>

                <div className='funny__header--content__images'>
                    {Image}
                </div>
            </div>
        </section>
    );
};

export default FunnyCard;
