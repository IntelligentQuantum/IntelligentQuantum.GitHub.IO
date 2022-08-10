import React from 'react';
import classnames from 'classnames';

import type { IHobby } from '../../interfaces/hobby';

import stylesFunny from '../../styles/pages/funny.module.scss';

const HobbyCard = (props: { hobby: IHobby }) =>
    (
        <section className={stylesFunny.funnyHeader}>
            <div className={stylesFunny.funnyHeaderContent} data-fact_type={props.hobby.type}>
                <div className={stylesFunny.funnyHeaderContentBox}>
                    <h1>
                        {props.hobby.title}
                    </h1>
                    <br/><br/>
                    <div className={stylesFunny.funnyHeaderContentDescription} data-fact_type={props.hobby.type}>
                        {props.hobby.description}
                    </div>
                </div>
                <div className={stylesFunny.funnyHeaderContentImages}>
                    <div className={classnames(stylesFunny.funnyHeaderContentImagesBackground)} data-hover='true' data-fact_type={props.hobby.type}>
                        {
                            props.hobby.type === 'football'
                                ? (
                                    <>
                                        <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} data-image='three' src='/static/images/funny/ferran_torres.png' alt='Ferran Torres'/>
                                        <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} data-image='one' src='/static/images/funny/antoine_griezmann.png' alt='Antoine Griezmann'/>
                                        <img className={stylesFunny.funnyHeaderContentImagesBackgroundTwo} data-image='two' src='/static/images/funny/lionel_messi.png' alt='Lionel Messi'/>
                                    </>
                                )
                                : props.hobby.type === 'space'
                                    ? <img className={stylesFunny.funnyHeaderContentImagesBackgroundFour} src='/static/images/funny/astronaut.png' alt='Astronaut'/>
                                    : props.hobby.type === 'guitar'
                                        ? <img className={stylesFunny.funnyHeaderContentImagesBackgroundFour} src='/static/images/funny/guitar.png' alt='Guitar'/>
                                        : props.hobby.type === 'music'
                                            ? <img className={stylesFunny.funnyHeaderContentImagesBackgroundThree} src='/static/images/funny/shadmehr_aghili.png' alt='Shadmehr Aghili'/>
                                            : props.hobby.type === 'cod'
                                                ? <>
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} src='/static/images/funny/azur.png' alt='Azur'/>
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundTwo} data-image='two' src='/static/images/funny/ghost_reckoner.png' alt='Ghost Reckoner'/>
                                                </>
                                                : props.hobby.type === 'discord'
                                                    ? <img className={stylesFunny.funnyHeaderContentImagesBackgroundDiscord} src='/static/images/funny/discord.png' alt='Discord'/>
                                                    : props.hobby.type === 'instagram'
                                                        ? <img className={stylesFunny.funnyHeaderContentImagesBackgroundInstagram} src='/static/images/funny/instagram.png' alt='Instagram'/>
                                                        : props.hobby.type === 'rarible'
                                                            ? <img className={stylesFunny.funnyHeaderContentImagesBackgroundRarible} src='/static/images/funny/rarible.jpg' alt='Rarible'/>
                                                            : null
                        }
                    </div>
                </div>
            </div>
        </section>
    );

export default HobbyCard;
