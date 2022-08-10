import React from 'react';
import classnames from 'classnames';

import type { IHobby } from '../../interfaces/hobby';

import stylesHobbies from '../../styles/pages/hobbies.module.scss';

const HobbyCard = (props: { hobby: IHobby }) =>
    (
        <section className={stylesHobbies.hobbiesHeader}>
            <div className={stylesHobbies.hobbiesHeaderContent} data-fact_type={props.hobby.type}>
                <div className={stylesHobbies.hobbiesHeaderContentBox}>
                    <h1>
                        {props.hobby.title}
                    </h1>
                    <br/><br/>
                    <div className={stylesHobbies.hobbiesHeaderContentDescription} data-fact_type={props.hobby.type}>
                        {props.hobby.description}
                    </div>
                </div>
                <div className={stylesHobbies.hobbiesHeaderContentImages}>
                    <div className={classnames(stylesHobbies.hobbiesHeaderContentImagesBackground)} data-hover='true' data-fact_type={props.hobby.type}>
                        {
                            props.hobby.type === 'football'
                                ? (
                                    <>
                                        <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundOne} data-image='three' src='/static/images/funny/ferran_torres.png' alt='Ferran Torres'/>
                                        <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundOne} data-image='one' src='/static/images/funny/antoine_griezmann.png' alt='Antoine Griezmann'/>
                                        <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundTwo} data-image='two' src='/static/images/funny/lionel_messi.png' alt='Lionel Messi'/>
                                    </>
                                )
                                : props.hobby.type === 'space'
                                    ? <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundFour} src='/static/images/funny/astronaut.png' alt='Astronaut'/>
                                    : props.hobby.type === 'guitar'
                                        ? <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundFour} src='/static/images/funny/guitar.png' alt='Guitar'/>
                                        : props.hobby.type === 'music'
                                            ? <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundThree} src='/static/images/funny/shadmehr_aghili.png' alt='Shadmehr Aghili'/>
                                            : props.hobby.type === 'cod'
                                                ? <>
                                                    <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundOne} src='/static/images/funny/azur.png' alt='Azur'/>
                                                    <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundTwo} data-image='two' src='/static/images/funny/ghost_reckoner.png' alt='Ghost Reckoner'/>
                                                </>
                                                : props.hobby.type === 'discord'
                                                    ? <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundDiscord} src='/static/images/funny/discord.png' alt='Discord'/>
                                                    : props.hobby.type === 'instagram'
                                                        ? <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundInstagram} src='/static/images/funny/instagram.png' alt='Instagram'/>
                                                        : props.hobby.type === 'rarible'
                                                            ? <img className={stylesHobbies.hobbiesHeaderContentImagesBackgroundRarible} src='/static/images/funny/rarible.jpg' alt='Rarible'/>
                                                            : null
                        }
                    </div>
                </div>
            </div>
        </section>
    );

export default HobbyCard;
