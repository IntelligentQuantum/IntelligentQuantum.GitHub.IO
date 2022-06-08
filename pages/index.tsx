import Head from 'next/head';
import Link from 'next/link';
import classnames from 'classnames';
import CountUp from 'react-countup';
import ReactTypingEffect from 'react-typing-effect';

import type { IPlan } from '../contracts/IPlan';
import type { IService } from '../contracts/IService';
import type { IContent } from '../contracts/IContent';

import Main from '../components/layouts/main/main.component';
import PlanCard from '../components/home/plan-card.component';
import ServiceCard from '../components/home/service-card.component';

import stylesMain from '../stylesheets/components/main.module.scss';
import stylesHome from '../stylesheets/pages/home.module.scss';
import stylesButtons from '../stylesheets/components/button.module.scss';

const Home: (props: { content: IContent }) => JSX.Element = (props: { content: IContent }) =>
{
    const servicesCard = props?.content?.services?.map((service: IService) =>
        <ServiceCard
            key={ service?.id }
            service={ service }
            text={ props?.content?.read_more }
        />
    );
    const plansCard = props?.content?.plans?.map((plan: IPlan) =>
        <PlanCard
            key={ plan?.id }
            plan={ plan }
            content={ props?.content}
            text={ props?.content?.order_now }
        />
    );

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
                <div className={stylesMain.mainContent}>
                    <div className={stylesMain.mainBackground}/>
                    <section className={stylesHome.home}>
                        <header className={stylesHome.homeHeader}>
                            <div className={stylesHome.homeHeaderContent}>
                                <h1>
                                    {props?.content?.titles[0]}
                                </h1>
                                <div className={stylesHome.homeHeaderContentDescription}>
                            <span>
                                &lt;<i>code</i>&gt;
                            </span>
                                    <span className='build'>
                                <span className='build__cursor'>
                                    <ReactTypingEffect
                                        text={props?.content?.typing_effect || [ '' ]}
                                    />
                                </span>
                            </span>
                                    <span>
                                &lt;/<i>code</i>&gt;
                            </span>
                                </div>
                                <Link href='/portfolio'>
                                    <a className={classnames(stylesButtons.button, 'align-self-start')}>
                                        {props?.content?.explore_more}
                                    </a>
                                </Link>
                            </div>
                            <div className={stylesHome.homeHeaderLogs}>
                                <div className={stylesHome.homeHeaderLogsBox}>
                            <span>
                                <CountUp
                                    start={0}
                                    end={99}
                                    duration={5}
                                />
                                +
                            </span>
                                    <p>
                                        {props?.content?.headers[0]}
                                    </p>
                                </div>
                                <div className={stylesHome.homeHeaderLogsBox}>
                            <span>
                                <CountUp
                                    start={0}
                                    end={100}
                                    duration={5}
                                />
                                +
                            </span>
                                    <p>
                                        {props?.content?.headers[1]}
                                    </p>
                                </div>
                                <div className={stylesHome.homeHeaderLogsBox}>
                            <span>
                                <CountUp
                                    start={0}
                                    end={5}
                                    duration={5}
                                />
                                +
                            </span>
                                    <p>
                                        {props?.content?.headers[2]}
                                    </p>
                                </div>
                                <div className={stylesHome.homeHeaderLogsBox}>
                            <span>
                                <CountUp
                                    start={0}
                                    end={20}
                                    duration={5}
                                />
                                +
                            </span>
                                    <p>
                                        {props?.content?.headers[3]}
                                    </p>
                                </div>
                            </div>
                        </header>
                        <div className='hr'/>
                        <h4 className='heading'>
                            {props?.content?.titles[1]}
                        </h4>
                        <div className={stylesHome.homeServices}>
                            {servicesCard}
                        </div>
                        <h4 className='heading'>
                            {props?.content?.titles[2]}
                        </h4>
                        <div className={stylesHome.homePlans}>
                            {plansCard}
                        </div>
                        <div className='hr'/>
                    </section>
                </div>
            </Main>
        </>
    )
}

export default Home;
