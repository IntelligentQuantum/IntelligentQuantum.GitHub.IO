import classnames from 'classnames';

import stylesFunny from '../../styles/pages/funny.module.scss';

const FunnyCard = (props: { fact: { title: string, description: string, type: string }}) =>
{
    return (
        <section className={stylesFunny.funnyHeader}>
            <div className={stylesFunny.funnyHeaderContent} data-type={props.fact.type}>
                <div className={stylesFunny.funnyHeaderContentBox}>
                    <h1>
                        {props.fact.title}
                    </h1>
                    <br/><br/>
                    <div className={stylesFunny.funnyHeaderContentDescription} data-type={props.fact.type}>
                        {props.fact.description}
                    </div>
                </div>
                <div className={stylesFunny.funnyHeaderContentImages}>
                    <div className={classnames(stylesFunny.funnyHeaderContentImagesBackground)} data-hover='true' data-type={props.fact.type}>
                        {
                            props.fact.type === 'football'
                                ?
                                <>
                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} src='/image/funny/Antoine_Griezmann.png' alt='Antoine Griezmann'/>
                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundTwo} data-image='two' src='/image/funny/Lionel_Messi.png' alt='Lionel Messi'/>
                                </>
                                :
                                props.fact.type === 'space'
                                    ?
                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundFour} src='/image/funny/Astronaut.png' alt='Astronaut'/>
                                    :
                                    props.fact.type === 'guitar'
                                        ?
                                        <img className={stylesFunny.funnyHeaderContentImagesBackgroundFour} src='/image/funny/Guitar.png' alt='Guitar'/>
                                        :
                                        props.fact.type === 'music'
                                            ?
                                            <img className={stylesFunny.funnyHeaderContentImagesBackgroundThree} src='/image/funny/Shadmehr_Aghili.png' alt='Shadmehr Aghili'/>
                                            :
                                            props.fact.type === 'cod'
                                                ?
                                                <>
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundOne} src='/image/funny/Azur.png' alt='Azur'/>
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundTwo} data-image='two' src='/image/funny/Ghost_Reckoner.png' alt='Ghost Reckoner'/>
                                                </>
                                                :
                                                props.fact.type === 'discord'
                                                    ?
                                                    <img className={stylesFunny.funnyHeaderContentImagesBackgroundDiscord} src='/image/funny/Discord.png' alt='Discord'/>
                                                    :
                                                    props.fact.type === 'instagram'
                                                        ?
                                                        <img className={stylesFunny.funnyHeaderContentImagesBackgroundInstagram} src='/image/funny/Instagram.png' alt='Instagram'/>
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
