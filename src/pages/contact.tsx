import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Main from '../components/layouts/main/main.component';

import { BsPerson, BsEnvelope, BsTextParagraph } from 'react-icons/bs';

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
                                    <span>Gmail:</span>
                                    <a href="mailto:Intelligentquantum@Gmail.com">IntelligentQuantum</a>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>ProtonMail:</span>
                                    <a href="mailto:Intelligentquantum@ProtonMail.com">IntelligentQuantum</a>
                                </li>
                                <li className={styles.contactCardsCardListItem}>
                                    <span>Discord:</span>
                                    <span>IntelligentQuantum#6439</span>
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

                    <h4 className={styles.contactHeading}>Get in Touch</h4>
                    <div className={styles.contactForm}>
                        <form>
                            <div className={styles.contactFormGroup}>
                                <label htmlFor="name">
                                    <BsPerson />
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div className={styles.contactFormGroup}>
                                <label htmlFor="email">
                                    <BsEnvelope />
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className={styles.contactFormGroup}>
                                <label htmlFor='message'>
                                    <BsTextParagraph />
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    placeholder='Message'
                                />
                            </div>
                            <div className={styles.contactFormGroup}>
                                <button>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </Main>
        </Fragment>
    );
};

export default Contact;
