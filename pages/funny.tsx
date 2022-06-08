import Head from 'next/head';

import type { IFunny } from '../contracts/IFunny';
import type { IContent } from '../contracts/IContent';

import Card from '../components/funny/card.component';
import Main from '../components/layouts/main/main.component';

import stylesFunny from '../styles/pages/funny.module.scss';
import stylesMain from '../styles/components/main.module.scss';

const Funny: (props: { content: IContent }) => JSX.Element = (props: { content: IContent }) =>
{
    const facts = props?.content?.funny_facts.map((fact: IFunny) =>
        <Card
            key={ fact?.id }
            fact={ fact }
        />
    );

    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; A few funny facts of im-parsa</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <title> Parsa Firoozi &mdash; Funny Facts </title>
                <meta name='Classification' content='Funny Facts'/>
                <meta name='subject' content='Funny'/>
                <meta name='description' content='Parsa Firoozi Funny Facts'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Funny Facts'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/funny'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Funny Facts'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/funny'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Funny Facts'/>
            </Head>
            <Main content={props?.content}>
                <div className={stylesMain.mainContent}>
                    <div className={stylesMain.mainBackground}/>
                    <div className='hr'/>
                    <section className={stylesFunny.funny}>
                        <h4 className='heading'>
                            {props?.content?.titles[5]}
                        </h4>
                        { facts }
                    </section>
                    <div className='hr'/>
                </div>
            </Main>
        </>
    )
}

export default Funny;
