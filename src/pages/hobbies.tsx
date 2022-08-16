import axios from 'axios';
import React from 'react';
import Head from 'next/head';
import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';

import type { IHobby } from '../interfaces/hobby';
import type { IPlayer } from '../interfaces/player';
import type { IContent } from '../interfaces/content';

import stylesHobbies from '../styles/pages/hobbies.module.scss';

const HobbyCard = dynamic(() => import('../components/cards/hobby-card.component'));
const ScrollMotion = dynamic(() => import('../components/animations/scroll.component'));

const Hobbies = (props: { content: IContent, players: IPlayer[] }) =>
{
    return (
        <>
            <Head>
                <title> Parsa Firoozi &mdash; Hobbies </title>

                <meta name='Classification' content='Hobbies'/>
                <meta name='subject' content='Hobbies'/>
                <meta name='description' content='Parsa Firoozi Hobbies'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Hobbies'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/hobbies'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Hobbies'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/hobbies'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Hobbies'/>
            </Head>

            <section className={stylesHobbies.hobbies}>
                <h4 className='heading'>{ props.content.titles[4] }</h4>
                <ScrollMotion className={stylesHobbies.hobbiesList}>
                    {
                        props.content.my_hobbies.map((hobby: IHobby) =>
                            <HobbyCard
                                key={ nanoid() }
                                hobby={ hobby }
                                players={ props.players }
                                content={ props.content }
                            />
                        )
                    }
                </ScrollMotion>
            </section>
        </>
    );
};

export async function getStaticProps()
{
    const { data: messi } = await axios.get('/football/player/lionel-messi/28003');
    const { data: griezmann } = await axios.get('/football/player/antoine-griezmann/125781');
    const { data: torres } = await axios.get('/football/player/ferran-torres/398184');

    if (!messi.player || !griezmann.player || !torres.player)
    {
        return {
            props: { players: [] }
        };
    }

    return {
        props:
            {
                players: [messi.player, griezmann.player, torres.player]
            },
        revalidate: 86400
    };
}

export default Hobbies;
