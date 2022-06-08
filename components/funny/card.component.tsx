import Image from 'next/image';
import classnames from 'classnames';

import stylesFunny from '../../styles/pages/funny.module.scss';

import type { IFunny } from '../../contracts/IFunny';

const FunnyCard = (props: { fact: IFunny }) =>
{
    return (
        <section className={stylesFunny.funnyHeader}>
            <div className={stylesFunny.funnyHeaderContent} data-fact_type={props.fact.type}>
                <div className={stylesFunny.funnyHeaderContentBox}>
                    <h1>
                        {props.fact.title}
                    </h1>
                    <br/><br/>
                    <div className={stylesFunny.funnyHeaderContentDescription} data-fact_type={props.fact.type}>
                        {props.fact.description}
                    </div>
                </div>
                <div className={stylesFunny.funnyHeaderContentImages}>
                    <div className={classnames(stylesFunny.funnyHeaderContentImagesBackground)} data-hover='true' data-fact_type={props.fact.type}>
                        {
                            props.fact.type === 'football'
                                ?
                                <>
                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} data-image='three' src='/static/images/funny/ferran_torres.png' alt='Ferran Torres'/>
                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} data-image='one' src='/static/images/funny/antoine_griezmann.png' alt='Antoine Griezmann'/>
                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundTwo} data-image='two' src='/static/images/funny/lionel_messi.png' alt='Lionel Messi'/></>
                                :
                                props.fact.type === 'space'
                                    ?
                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundFour} src='/static/images/funny/astronaut.png' alt='Astronaut'/>
                                    :
                                    props.fact.type === 'guitar'
                                        ?
                                        <img className={stylesFunny.funnyHeaderContentImagesBackgroundFour} src='/static/images/funny/guitar.png' alt='Guitar'/>
                                        :
                                        props.fact.type === 'music'
                                            ?
                                            <img className={stylesFunny.funnyHeaderContentImagesBackgroundThree} src='/static/images/funny/shadmehr_aghili.png' alt='Shadmehr Aghili'/>
                                            :
                                            props.fact.type === 'cod'
                                                ?
                                                <>
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} src='/static/images/funny/azur.png' alt='Azur'/>
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundTwo} data-image='two' src='/static/images/funny/ghost_reckoner.png' alt='Ghost Reckoner'/>
                                                </>
                                                :
                                                props.fact.type === 'discord'
                                                    ?
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundDiscord} src='/static/images/funny/discord.png' alt='Discord'/>
                                                    :
                                                    props.fact.type === 'instagram'
                                                        ?
                                                        <img className={stylesFunny.funnyHeaderContentImagesBackgroundInstagram} src='/static/images/funny/instagram.png' alt='Instagram'/>
                                                        :
                                                        props.fact.type === 'rarible'
                                                            ?
                                                            <img className={stylesFunny.funnyHeaderContentImagesBackgroundRarible} src='/static/images/funny/rarible.jpg' alt='Rarible'/>
                                                            :
                                                        null
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunnyCard;
