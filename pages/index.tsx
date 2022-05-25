import Head from 'next/head';
import type { NextPage } from 'next';

import Main from '../components/main/main.component';
import HomeComponent from '../components/home/home.component';

const Home: NextPage = (props: any) =>
{
    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Full-Stack Developer & Graphic Designer</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
            </Head>
            <Main content={props?.content}>
                <HomeComponent content={props?.content} />
            </Main>
        </>
    )
}

export default Home;
