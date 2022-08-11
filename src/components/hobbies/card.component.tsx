import React from 'react';
import Image from 'next/image';

import type { IHobby } from '../../interfaces/hobby';

import HeroMessi from '../../../public/static/images/hobbies/hero-lionel-messi.png';
import HeroTorres from '../../../public/static/images/hobbies/hero-ferran-torres.png';
import HeroGriezmann from '../../../public/static/images/hobbies/hero-antoine-griezmann.png';

import stylesHobbies from '../../styles/pages/hobbies.module.scss';
import TooltipPrimary from "../tooltip/tooltip-primary.component";

const HobbyCard = (props: { hobby: IHobby }) =>
    (
        <div className={stylesHobbies.hobbiesBox}>
            <div className={stylesHobbies.hobbiesBoxContent} data-fact_type={props.hobby.type}>
                <div className={stylesHobbies.hobbiesBoxContentBox}>
                    <h3 className={stylesHobbies.hobbiesBoxContentBoxTitle}>
                        { props.hobby.title }
                    </h3>

                    <p className={stylesHobbies.hobbiesBoxContentBoxDescription} data-fact_type={props.hobby.type}>
                        { props.hobby.description }
                    </p>
                </div>

                <div className={stylesHobbies.hobbiesBoxContentImages}>
                    {
                        props.hobby.type === 'football'
                            ? (
                                <>
                                    <TooltipPrimary
                                        placement='left'
                                        title='messi'
                                    >
                                        <span data-hero={true}>
                                            <Image
                                                src={ HeroMessi }
                                                alt='Lionel Messi'
                                                layout='intrinsic'
                                                width={290}
                                                height={365}
                                            />
                                        </span>
                                    </TooltipPrimary>

                                    <span data-hero={true}>
                                        <Image
                                            src={ HeroGriezmann }
                                            alt='Antoine Griezmann'
                                            layout='intrinsic'
                                            width={275}
                                            height={360}
                                        />
                                    </span>
                                    <span data-hero={true}>
                                        <Image
                                            src={ HeroTorres }
                                            alt='Ferran Torres'
                                            layout='intrinsic'
                                            width={280}
                                            height={360}
                                        />
                                    </span>
                                </>
                            )
                            : props.hobby.type === 'space'
                                ? <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundFour} src='/static/images/hobbies/astronaut.png' alt='Astronaut'/>
                                : props.hobby.type === 'guitar'
                                    ? <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundFour} src='/static/images/hobbies/guitar.png' alt='Guitar'/>
                                    : props.hobby.type === 'music'
                                        ? <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundThree} src='/static/images/hobbies/shadmehr_aghili.png' alt='Shadmehr Aghili'/>
                                        : props.hobby.type === 'cod'
                                            ? <>
                                                <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundOne} src='/static/images/hobbies/azur.png' alt='Azur'/>
                                                <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundTwo} data-image='two' src='/static/images/hobbies/ghost_reckoner.png' alt='Ghost Reckoner'/>
                                            </>
                                            : props.hobby.type === 'discord'
                                                ? <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundDiscord} src='/static/images/hobbies/discord.png' alt='Discord'/>
                                                : props.hobby.type === 'instagram'
                                                    ? <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundInstagram} src='/static/images/hobbies/instagram.png' alt='Instagram'/>
                                                    : props.hobby.type === 'rarible'
                                                        ? <img className={stylesHobbies.hobbiesBoxContentImagesBackgroundRarible} src='/static/images/hobbies/rarible.jpg' alt='Rarible'/>
                                                        : null
                    }
                </div>
            </div>
        </div>
    );

export default HobbyCard;
