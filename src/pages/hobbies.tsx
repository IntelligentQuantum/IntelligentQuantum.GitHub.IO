import Head from 'next/head';
import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState, useCallback } from 'react';

import type { IHobby } from '../interfaces/hobby';
import type { IPlayer } from '../interfaces/player';
import type { IContent } from '../interfaces/content';

import stylesHobbies from '../styles/pages/hobbies.module.scss';

const HobbyCard = dynamic(() => import('../components/cards/hobby-card.component'));

const Hobbies = (props: { content: IContent }) =>
{
    const [players, setPlayers] = useState<IPlayer[]>([]);

    const getPlayer = useCallback(async(id: string, name: string, index: number) =>
    {
        const array = players;

        await axios.get(`/football/player/${ name }/${ id }`)
            .then((response: AxiosResponse) =>
            {
                array[index] = response.data?.player;

                setPlayers([ ...array]);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }, [players]);

    const getPlayers = useCallback(async() =>
    {
        getPlayer('28003', 'lionel-messi', 0);
        getPlayer('125781', 'antoine-griezmann', 1);
        getPlayer('398184', 'ferran-torres', 2);
    }, [getPlayer]);

    useEffect(() =>
    {
        getPlayers();
    }, [getPlayers]);

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
                <h4 className='heading'>
                    {props.content.titles[4]}
                </h4>
                <ul className={stylesHobbies.hobbiesList}>
                    {
                        props.content.my_hobbies.map((hobby: IHobby, index: number) =>
                            <HobbyCard
                                index={ index }
                                key={ nanoid() }
                                hobby={ hobby }
                                players={ players }
                                content={ props.content }
                            />
                        )
                    }
                </ul>
            </section>
        </>
    );
};

export default Hobbies;
