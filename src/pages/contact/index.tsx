import axios from 'axios';
import Head from 'next/head';
import validator from 'validator';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState, ChangeEvent, Fragment } from 'react';
import { BsEnvelope, BsPerson, BsTextParagraph } from 'react-icons/bs';

import type { IContent } from '../../interfaces/content';
import type { ILanguages } from '../../interfaces/language';

import 'tippy.js/dist/tippy.css';
import stylesContact from '../../styles/pages/contact.module.scss';
import stylesButton from '../../styles/components/button.module.scss';

import data from '../../../public/static/data/data.json';

const ItemMotion = dynamic (() => import('../../components/animations/item.component'));
const ScrollMotion = dynamic (() => import('../../components/animations/scroll.component'));
const TooltipPrimary = dynamic (() => import('../../components/tooltips/tooltip-primary.component'));

type Error =
    {
        name: 'empty' | null,
        email: 'empty' | 'incorrect_email' | null,
        message: 'empty' | null
    };

const defaultError =
    {
        name: null,
        email: null,
        message: null
    };

const Contact = () =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    const [error, setError] = useState<Error>(defaultError);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const sendMessage = async(event: { preventDefault: () => void; }) =>
    {
        event.preventDefault();

        let errorV = { ...error };

        if (!email) errorV = { ...errorV, email: 'empty' };
        else if (!validator.isEmail(email)) errorV = { ...errorV, email: 'incorrect_email' };

        if (!name) errorV = { ...errorV, name: 'empty' };

        if (!message) errorV = { ...errorV, message: 'empty' };

        setError(errorV);

        if (errorV.email || errorV.name || errorV.message) return;

        await axios.post(
            '/contact/mail',
            {
                name,
                email,
                message
            }
        );
    };

    return (
        <Fragment>
            <Head>
                <title>Parsa Firoozi &mdash; Contact with me</title>

                <meta name='Classification' content='Contact'/>
                <meta name='subject' content='Contact'/>
                <meta name='description' content='Parsa Firoozi Contact'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Contact'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/contact'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Contact'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/contact'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Contact'/>
            </Head>

            <section className={stylesContact.contact}>
                <h4 className='heading'>{ content.titles[2] }</h4>
                <motion.ul className={stylesContact.contactInformation}>
                    <ItemMotion index={ 0 } className={stylesContact.contactInformationContent}>
                        <motion.ul className={stylesContact.contactInformationContentPersonal}>
                            <li>
                                <h3>
                                    <span>{ content.residence }: </span>
                                    { content.my_residence }
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <span>{ content.city }: </span>
                                    { content.my_city }
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <span>{ content.age }: </span>
                                    { new Date().getFullYear() - content.my_age }
                                </h3>
                            </li>
                        </motion.ul>
                    </ItemMotion>

                    <ItemMotion index={ 1 } className={stylesContact.contactInformationContent}>
                        <ul className={stylesContact.contactInformationContentPersonal}>
                            <li>
                                <h3>
                                    <span>{ content.email }: </span>
                                    { content.my_email }
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <span>{ content.gmail }: </span>
                                    { content.my_gmail }
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <span>{ content.protonmail }: </span>
                                    { content.my_protonmail }
                                </h3>
                            </li>
                        </ul>
                    </ItemMotion>

                    <ItemMotion index={ 2 }  className={stylesContact.contactInformationContent}>
                        <ul className={stylesContact.contactInformationContentPersonal}>
                            <li>
                                <h3>
                                    <span>{ content.phone }: </span>
                                    { content.my_phone }
                                </h3>
                            </li>
                            <li>
                                <span>
                                    <span>{ content.whatsapp }: </span>
                                    +
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span>{ content.telegram }: </span>
                                    +
                                </span>
                            </li>
                        </ul>
                    </ItemMotion>
                </motion.ul>

                <ScrollMotion delay={ .9 }>
                    <h4 className='heading'>{ content.titles[3] }</h4>
                    <div className={stylesContact.contactInTouchParent}>
                        <div className={stylesContact.contactInTouch}>
                            <form onSubmit={sendMessage}>
                                <TooltipPrimary
                                    placement={ content.dir === 'rtl' ? 'right' : 'left' }
                                    content={ error.name ? content.error[error.name] : null }
                                >
                                    <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupInput)} data-error={error.name}>
                                        <input
                                            id='name'
                                            name='name'
                                            type='text'
                                            required={ true }
                                            placeholder={ content.name }
                                            onBlur={(event: any) =>
                                            {
                                                if (!event.target.value)
                                                    setError({ ...error, name: 'empty' });
                                                else
                                                    setError({ ...error, email: null });
                                            }}
                                            onFocus={() => setError({ ...error, name: null })}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                                        />
                                        <label htmlFor='name'>
                                            <BsPerson />
                                        </label>
                                    </div>
                                </TooltipPrimary>

                                <TooltipPrimary
                                    placement={ content.dir === 'rtl' ? 'right' : 'left' }
                                    content={ error.email ? content.error[error.email] : null }
                                >
                                    <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupInput)} data-error={error.email}>
                                        <input
                                            id='email'
                                            name='email'
                                            type='email'
                                            required={ true }
                                            placeholder={ content.email}
                                            onBlur={(event: any) =>
                                            {
                                                if (!event.target.value)
                                                    setError({ ...error, email: 'empty' });
                                                else if (!validator.isEmail(event.target.value))
                                                    setError({ ...error, email: 'incorrect_email' });
                                                else
                                                    setError({ ...error, email: null });
                                            }}
                                            onFocus={() => setError({ ...error, email: null })}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                        />
                                        <label htmlFor='email'>
                                            <BsEnvelope />
                                        </label>
                                    </div>
                                </TooltipPrimary>

                                <TooltipPrimary
                                    placement={ content.dir === 'rtl' ? 'right' : 'left' }
                                    content={ error.message ? content.error[error.message] : null }
                                >
                                    <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupMessageInput)} data-error={error.message}>
                                        <textarea
                                            id='message'
                                            name='message'
                                            required={true}
                                            placeholder={ content.message }
                                            onBlur={(event: any) =>
                                            {
                                                if (!event.target.value)
                                                    setError({ ...error, message: 'empty' });
                                                else
                                                    setError({ ...error, message: null });
                                            }}
                                            onFocus={() => setError({ ...error, message: null })}
                                            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
                                        />
                                        <label htmlFor='message'>
                                            <BsTextParagraph />
                                        </label>
                                    </div>
                                </TooltipPrimary>

                                <div className={stylesContact.contactInTouchFormGroup}>
                                    <button onClick={sendMessage} className={classnames(stylesButton.button, 'align-self-start')}>
                                        { content.send_message}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </ScrollMotion>
            </section>
        </Fragment>
    );
};

export default Contact;
