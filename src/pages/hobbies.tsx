import Head from 'next/head';
import dynamic from 'next/dynamic';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

import type { IHobby } from '../interfaces/hobby';
import type { IContent } from '../interfaces/content';

import stylesMain from '../styles/components/main.module.scss';
import stylesHobbies from '../styles/pages/hobbies.module.scss';

const Card = dynamic(() => import('../components/hobbies/card.component'));
const Main = dynamic(() => import('../components/layouts/main/main.component'));

const Hobbies = (props: { content: IContent }) =>
{
    const [players, setPlayers] = useState<any[]>([]);

    const getPlayer = async(id: string, name: string, index: number) =>
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
    };

    useEffect(() =>
    {
        getPlayer('28003', 'lionel-messi', 0);
        getPlayer('125781', 'antoine-griezmann', 1);
        getPlayer('398184', 'ferran-torres', 2);
    }, []);

    console.log(players);

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; A few Hobbies of im-parsa</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

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

            <Main content={props?.content}>
                <div className={stylesMain.mainContent}>
                    <span className={stylesMain.mainBackground}/>
                    <span className='hr'/>

                    <section className={stylesHobbies.hobbies}>
                        <h4 className='heading'>
                            {props?.content?.titles[4]}
                        </h4>

                        {
                            props?.content?.my_hobbies.map((hobby: IHobby) =>
                                <Card
                                    key={ hobby?.id }
                                    hobby={ hobby }
                                    content={ props.content }
                                    players={ players }
                                />
                            )
                        }
                    </section>

                    <span className='hr'/>
                </div>
            </Main>
        </>
    );
};

export default Hobbies;
