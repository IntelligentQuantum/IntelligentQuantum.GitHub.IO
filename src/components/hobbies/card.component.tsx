import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import reactHtmlParser from 'html-react-parser';

import type { IHobby } from '../../interfaces/hobby';
import type { IContent } from '../../interfaces/content';
import type { ILanguages } from '../../interfaces/language';

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

import data from '../../../public/static/data/data.json';

const TooltipFootball = dynamic(() => import('./tooltip-football.component'));
const TooltipPrimary = dynamic(() => import('../tooltip/tooltip-primary.component'));

type Props =
    {
        players: any,
        hobby: IHobby
    };

const HobbyCard = ({ players, hobby }: Props) =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    return (
        <div className={stylesHobbies.hobbiesBox}>
            <div className={stylesHobbies.hobbiesBoxContent} data-fact_type={hobby.type}>
                <div className={stylesHobbies.hobbiesBoxContentBox}>
                    <h3 className={stylesHobbies.hobbiesBoxContentBoxTitle}>
                        { hobby.title }
                    </h3>
                    <p className={stylesHobbies.hobbiesBoxContentBoxDescription} data-fact_type={hobby.type}>
                        { reactHtmlParser(hobby.description) }
                    </p>
                </div>
                <div className={stylesHobbies.hobbiesBoxContentImages}>
                    {
                        hobby.type === 'football'
                            ?
                            <>
                                <TooltipPrimary
                                    placement={ content.language === 'fa' ? 'right' : 'left' }
                                    render={ <TooltipFootball player={ players[0] }/> }
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
                                    placement={ content.language === 'fa' ? 'right' : 'left' }
                                    render={ <TooltipFootball player={ players[1] }/> }
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
                                    placement={ content.language === 'fa' ? 'right' : 'left' }
                                    render={ <TooltipFootball player={ players[2] }/> }
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
                            hobby.type === 'space'
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
                                hobby.type === 'guitar'
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
                                    hobby.type === 'music'
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
                                        hobby.type === 'cod'
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
                                            : hobby.type === 'discord'
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
                                                : hobby.type === 'instagram'
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
                                                    : hobby.type === 'rarible'
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
