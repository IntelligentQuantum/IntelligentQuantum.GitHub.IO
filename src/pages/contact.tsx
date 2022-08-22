import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Main from '../components/layouts/main/main.component';

import styles from '../styles/contact.module.scss';

const Contact: NextPage = () =>
{
    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Contact'/>
                <meta name='subject' content='Contact'/>
                <meta name='description' content='IntelligentQuantum Contact'/>
                <meta name='keywords' content='IntelligentQuantum, IQ, Quantum, Intelligent, Contact'/>
                <meta name='author' content='IntelligentQuantum'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://intelligentquantum.dev/contact'/>
                <meta property='og:title' content='IntelligentQuantum'/>
                <meta property='og:description' content='IntelligentQuantum Contact'/>
                <meta property='og:image' content='https://intelligentquantum.dev/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://intelligentquantum.dev/contact'/>
                <meta property='twitter:title' content='IntelligentQuantum'/>
                <meta property='twitter:description' content='IntelligentQuantum Contact'/>

                <title>IntelligentQuantum &mdash; Contact with me</title>
            </Head>

            <Main>
                <section className={styles.contact}>
                    <h4 className={styles.contactHeading}>Contact Information</h4>
                    <div className={styles.contactCards}>
                        <div className={styles.contactCardsCard}>
                            <ul className={styles.contactCardsCardList}>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Residence:</span>
                                    <span>Iran</span>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>City:</span>
                                    <span>Shiraz</span>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Age:</span>
                                    <span>{new Date().getFullYear() - 1997}</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.contactCardsCard}>
                            <ul className={styles.contactCardsCardList}>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Residence:</span>
                                    <span>Iran</span>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>City:</span>
                                    <span>Shiraz</span>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Age:</span>
                                    <span>{new Date().getFullYear() - 1997}</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.contactCardsCard}>
                            <ul className={styles.contactCardsCardList}>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Mobile:</span>
                                    <span>+98 9170459330</span>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Whatsapp:</span>
                                    <span>+</span>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Telegram:</span>
                                    <span>+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Main>
        </Fragment>
    );
};

export default Contact;
