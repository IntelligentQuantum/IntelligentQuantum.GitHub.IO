import Head from 'next/head';
import type { NextPage } from 'next';

import Main from '../components/main/main.component';
import PortfolioComponent from '../components/portfolio/portfolio.component';

const Portfolio: NextPage = (props: any) =>
{
    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Resume and complete portfolio of im-parsa</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='Classification' content='Portfolio'/>
                <meta name='subject' content='Portfolio'/>
                <meta name='description' content='Parsa Firoozi Portfolio'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/portfolio'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Portfolio'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/portfolio'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Portfolio'/>
            </Head>
            <Main content={props?.content}>
                <PortfolioComponent content={props?.content} />
            </Main>
        </>
    )
}

export default Portfolio;
