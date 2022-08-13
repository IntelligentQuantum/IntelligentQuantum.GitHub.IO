import axios from 'axios';
import Head from 'next/head';
import validator from 'validator';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import React, { useState, ChangeEvent } from 'react';
import { BsEnvelope, BsPerson, BsTextParagraph } from 'react-icons/bs';

import type { iContent } from '../interfaces/content';

import 'tippy.js/dist/tippy.css';
import stylesContact from '../styles/pages/contact.module.scss';
import stylesButton from '../styles/components/button.module.scss';

const TooltipPrimary = dynamic (() => import('../components/tooltips/tooltip-primary.component'));

const Contact = (props: { content: iContent }) =>
{
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<{ name: 'empty' | null, email: 'empty' | 'incorrect_email' | null, message: 'empty' | null }>(
        {
            name: null,
            email: null,
            message: null
        }
    );

    const sendMessage = async(event: { preventDefault: () => void; }) =>
    {
        event.preventDefault();

        let errorV = { ...error };

        if (!email)
            errorV = { ...errorV, email: 'empty' };
        else if (!validator.isEmail(email))
            errorV = { ...errorV, email: 'incorrect_email' };

        if (!name)
            errorV = { ...errorV, name: 'empty' };

        if (!message)
            errorV = { ...errorV, message: 'empty' };

        setError(errorV);

        if (errorV.email || errorV.name || errorV.message)
            return;

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
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Contact with im-parsa</title>

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
                <h4 className='heading'>
                    { props.content.titles[2] }
                </h4>

                <div className={stylesContact.contactInformation}>
                    <div className={stylesContact.contactInformationContent}>
                        <div className={stylesContact.contactInformationContentPersonal}>
                            <ul>
                                <li>
                                    <h6>
                                        { props.content.residence }:
                                    </h6>
                                    <span>
                                        { props.content.my_residence }
                                    </span>
                                </li>

                                <li>
                                    <h6>
                                        { props.content.city }:
                                    </h6>
                                    <span>
                                        { props.content.my_city }
                                    </span>
                                </li>

                                <li>
                                    <h6>
                                        { props.content.age }:
                                    </h6>
                                    <span>
                                        { props.content.my_age }
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={stylesContact.contactInformationContent}>
                        <div className={stylesContact.contactInformationContentPersonal}>
                            <ul>
                                <li>
                                    <h6>
                                        { props.content.email }:
                                    </h6>
                                    <span>
                                        { props.content.my_email }
                                    </span>
                                </li>

                                <li>
                                    <h6>
                                        { props.content.gmail }:
                                    </h6>
                                    <span>
                                        { props.content.my_gmail }
                                    </span>
                                </li>

                                <li>
                                    <h6>
                                        { props.content.chmail }:
                                    </h6>
                                    <span>
                                        { props.content.my_chmail }
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={stylesContact.contactInformationContent}>
                        <div className={stylesContact.contactInformationContentPersonal}>
                            <ul>
                                <li>
                                    <h6>
                                        { props.content.phone }:
                                    </h6>
                                    <span>
                                        { props.content.my_phone }
                                    </span>
                                </li>

                                <li>
                                    <h6>
                                        { props.content.whatsapp }:
                                    </h6>
                                    <span>
                                                +
                                    </span>
                                </li>

                                <li>
                                    <h6>
                                        { props.content.telegram }:
                                    </h6>
                                    <span>
                                                +
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h4 className='heading'>
                    { props.content.titles[3] }
                </h4>

                <div className={stylesContact.contactInTouchParent}>
                    <div className={stylesContact.contactInTouch}>
                        <form onSubmit={sendMessage}>
                            <TooltipPrimary
                                placement={ props.content.dir === 'rtl' ? 'right' : 'left' }
                                title={ error.name ? props.content.error[error.name] : null }
                            >
                                <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupInput)} data-error={error.name}>
                                    <input
                                        id='name'
                                        name='name'
                                        type='text'
                                        required={ true }
                                        placeholder={ props.content.name }
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
                                placement={ props.content.dir === 'rtl' ? 'right' : 'left' }
                                title={ error.email ? props.content.error[error.email] : null }
                            >
                                <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupInput)} data-error={error.email}>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        required={ true }
                                        placeholder={ props.content.email}
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
                                placement={ props.content.dir === 'rtl' ? 'right' : 'left' }
                                title={ error.message ? props.content.error[error.message] : null }
                            >
                                <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupMessageInput)} data-error={error.message}>
                                    <textarea
                                        id='message'
                                        name='message'
                                        required={true}
                                        placeholder={ props.content.message }
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
                                    { props.content.send_message}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
