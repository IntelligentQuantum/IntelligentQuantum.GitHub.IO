import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';
import reactStringReplace from 'react-string-replace';

import type { IHobby } from '../../interfaces/hobby';
import type { IPlayer } from '../../interfaces/player';
import type { IContent } from '../../interfaces/content';

import HeroAzur from '../../../public/static/images/hobbies/hero-azur.png';
import HeroGuitar from '../../../public/static/images/hobbies/hero-guitar.png';
import HeroRarible from '../../../public/static/images/hobbies/hero-rarible.jpg';
import HeroDiscord from '../../../public/static/images/hobbies/hero-discord.png';
import HeroMessi from '../../../public/static/images/hobbies/hero-lionel-messi.png';
import HeroAstronaut from '../../../public/static/images/hobbies/hero-astronaut.png';
import HeroInstagram from '../../../public/static/images/hobbies/hero-instagram.png';
import HeroTorres from '../../../public/static/images/hobbies/hero-ferran-torres.png';
import HeroGhost from '../../../public/static/images/hobbies/hero-ghost-reckoner.png';
import HeroShadmehr from '../../../public/static/images/hobbies/hero-shadmehr-aghili.png';
import HeroGriezmann from '../../../public/static/images/hobbies/hero-antoine-griezmann.png';

import stylesHobbies from '../../styles/pages/hobbies.module.scss';

const TooltipPrimary = dynamic(() => import('../tooltips/tooltip-primary.component'));
const TooltipFootball = dynamic(() => import('../tooltips/tooltip-football.component'));

const HobbyCard = (props: { content: IContent, players: IPlayer[], hobby: IHobby }) =>
{
    const replaceHobbyTitle = (domHandlerNode: any) =>
    {
        if (domHandlerNode.type === 'text' && domHandlerNode.data.includes('KOOH_PLAYER'))
        {
            return <> {
                reactStringReplace(domHandlerNode.data, 'KOOH_PLAYER', () =>
                    (
                        <TooltipPrimary
                            interactive={ true }
                            render={ <iframe src="https://open.spotify.com/embed/track/6kvTtZhjHYOfyPFdzRqJTf?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> }
                        >
                            <strong>Kooh</strong>
                        </TooltipPrimary>
                    ))
            }
            </>;
        }
    };

    return (
        <div className={stylesHobbies.hobbiesBox}>
            <div className={stylesHobbies.hobbiesBoxContent} data-fact_type={props.hobby.type}>
                <div className={stylesHobbies.hobbiesBoxContentBox}>
                    <h3 className={stylesHobbies.hobbiesBoxContentBoxTitle}>
                        { props.hobby.title }
                    </h3>

                    <p className={stylesHobbies.hobbiesBoxContentBoxDescription} data-fact_type={props.hobby.type}>
                        { parse(props.hobby.description, { replace: replaceHobbyTitle }) }
                    </p>
                </div>

                <div className={stylesHobbies.hobbiesBoxContentImages}>
                    {
                        props.hobby.type === 'football'
                            ?
                            <>
                                <TooltipPrimary
                                    placement={ props.content.language === 'fa' ? 'right' : 'left' }
                                    render={ <TooltipFootball player={ props?.players[0] }/> }
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

                                <TooltipPrimary
                                    placement={ props.content.language === 'fa' ? 'right' : 'left' }
                                    render={ <TooltipFootball player={ props?.players[1] }/> }
                                >
                                    <span data-hero={true}>
                                        <Image
                                            src={ HeroGriezmann }
                                            alt='Antoine Griezmann'
                                            layout='intrinsic'
                                            width={275}
                                            height={360}
                                        />
                                    </span>
                                </TooltipPrimary>

                                <TooltipPrimary
                                    placement={ props.content.language === 'fa' ? 'right' : 'left' }
                                    render={ <TooltipFootball player={ props?.players[2] }/> }
                                >
                                    <span data-hero={true}>
                                        <Image
                                            src={ HeroTorres }
                                            alt='Ferran Torres'
                                            layout='intrinsic'
                                            width={280}
                                            height={360}
                                        />
                                    </span>
                                </TooltipPrimary>
                            </>
                            :
                            props.hobby.type === 'space'
                                ?
                                <span className={stylesHobbies.hobbiesBoxContentImagesStatic}>
                                    <Image
                                        src={ HeroAstronaut }
                                        alt='Astronaut'
                                        layout='intrinsic'
                                        width={420}
                                        height={420}
                                    />
                                </span>
                                :
                                props.hobby.type === 'guitar'
                                    ?
                                    <span className={stylesHobbies.hobbiesBoxContentImagesStatic}>
                                        <Image
                                            src={ HeroGuitar }
                                            alt='Guitar'
                                            layout='intrinsic'
                                            width={420}
                                            height={420}
                                        />
                                    </span>
                                    :
                                    props.hobby.type === 'music'
                                        ?
                                        <span className={stylesHobbies.hobbiesBoxContentImagesStatic}>
                                            <Image
                                                src={ HeroShadmehr }
                                                alt='Shadmehr Aghili'
                                                layout='intrinsic'
                                                width={420}
                                                height={420}
                                            />
                                        </span>
                                        :
                                        props.hobby.type === 'cod'
                                            ?
                                            <>
                                                <span data-hero={true}>
                                                    <Image
                                                        src={ HeroAzur }
                                                        alt='Azur'
                                                        layout='intrinsic'
                                                        width={342.4}
                                                        height={360}
                                                    />
                                                </span>

                                                <span data-hero={true}>
                                                    <Image
                                                        src={ HeroGhost }
                                                        alt='Ghost Reckoner'
                                                        layout='intrinsic'
                                                        width={291}
                                                        height={360}
                                                    />
                                                </span>
                                            </>
                                            : props.hobby.type === 'discord'
                                                ?
                                                <span className={stylesHobbies.hobbiesBoxContentImagesLogo} data-discord={true}>
                                                    <Image
                                                        src={ HeroDiscord }
                                                        alt='Discord'
                                                        layout='intrinsic'
                                                        width={310}
                                                        height={170}
                                                    />
                                                </span>
                                                : props.hobby.type === 'instagram'
                                                    ?
                                                    <span className={stylesHobbies.hobbiesBoxContentImagesLogo}>
                                                        <Image
                                                            src={ HeroInstagram }
                                                            alt='Instagram'
                                                            layout='intrinsic'
                                                            width={250}
                                                            height={250}
                                                        />
                                                    </span>
                                                    : props.hobby.type === 'rarible'
                                                        ?
                                                        <span className={stylesHobbies.hobbiesBoxContentImagesLogo}>
                                                            <Image
                                                                src={ HeroRarible }
                                                                alt='Rarible'
                                                                layout='intrinsic'
                                                                width={250}
                                                                height={250}
                                                            />
                                                        </span>
                                                        :
                                                        null
                    }
                </div>
            </div>
        </div>
    );
};

export default HobbyCard;
