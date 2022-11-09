import Head from 'next/head';
import dynamic from 'next/dynamic';
import { v4 as uuidV4 } from 'uuid';
import React, { Fragment } from 'react';

import FootballService from '../lib/football';

import type { IHobby } from '../interfaces/hobby';
import type { IPlayer } from '../interfaces/player';
import type { IContent } from '../interfaces/content';

import stylesHobbies from '../styles/pages/hobbies.module.scss';

import data from '../../public/static/data/hobbies.json';

const HobbyCard = dynamic(() => import('../components/cards/hobby-card.component'));
const ScrollMotion = dynamic(() => import('../components/animations/scroll.component'));

const Hobbies = (props: { content: IContent, players: IPlayer[] }) =>
{
    return (
        <Fragment>
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
                                key={ uuidV4() }
                                hobby={ hobby }
                                players={ props.players }
                                content={ props.content }
                            />
                        )
                    }
                </ScrollMotion>
            </section>
        </Fragment>
    );
};

export async function getStaticProps()
{
    try
    {
        const footballService = new FootballService();

        const { player: messi } = await footballService.Player('lionel-messi', '28003');
        const { player: griezmann } = await footballService.Player('antoine-griezmann', '125781');
        const { player: torres } = await footballService.Player('ferran-torres', '398184');

        if (!messi || !griezmann || !torres)
            return { props: { players: data.players }};

        return {
            props: { players: [messi, griezmann, torres] },
            revalidate: 86400
        };
    }
    catch (error)
    {
        return { props: { players: [] }};
    }
}

export default Hobbies;
