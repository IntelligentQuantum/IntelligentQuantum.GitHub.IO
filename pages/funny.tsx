import Head from 'next/head';
import type { NextPage } from 'next';

import Main from '../components/main/main.component';
import FunnyComponent from '../components/funny/funny.component';

const Funny: NextPage = (props: any) =>
{
    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; A few time of im-parsa funny facts</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <title> Parsa Firoozi &mdash; Funny Time </title>
                <meta name='Classification' content='Funny Time'/>
                <meta name='subject' content='Funny'/>
                <meta name='description' content='Parsa Firoozi Funny Time'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Funny Time'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/funny'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Funny Time'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/funny'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Funny Time'/>
            </Head>
            <Main content={props?.content}>
                <FunnyComponent content={props?.content} />
            </Main>
        </>
    )
}

export default Funny;
