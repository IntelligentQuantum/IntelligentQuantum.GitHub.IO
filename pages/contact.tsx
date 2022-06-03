import Head from 'next/head';
import classnames from 'classnames';

import type { IContent } from '../contracts/IContent';

import Main from '../components/layouts/main/main.component';

import stylesMain from '../styles/components/main.module.scss';
import stylesContact from '../styles/pages/contact.module.scss';
import stylesButton from '../styles/components/button.module.scss';

const Contact: (props: { content: IContent }) => JSX.Element = (props: { content: IContent }) =>
{
    return (
        <>
            <Head>
                <title>Parsa Firoozi &mdash; Contact with im-parsa from your mail</title>

                <meta charSet='UTF-8' />
                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />

                <meta name='Classification' content='Contact'/>
                <meta name='subject' content='Contact'/>
                <meta name='description' content='Parsa Firoozi Contact'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Contact'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/contact'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Contact'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/contact'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Contact'/>
            </Head>
            <Main content={props?.content}>
                <div className={stylesMain.mainContent}>
                    <div className={stylesMain.mainBackground}/>
                    <div className='hr'/>
                    <section className={stylesContact.contact}>
                        <h4 className='heading'>{props?.content?.titles[3]}</h4>
                        <div className={stylesContact.contactInformation}>
                            <div className={stylesContact.contactInformationContent}>
                                <div className={stylesContact.contactInformationContentPersonal}>
                                    <ul>
                                        <li>
                                            <h6>{props?.content?.residence}:</h6>
                                            <span>{props?.content?.my_residence}</span>
                                        </li>
                                        <li>
                                            <h6>{props?.content?.city}:</h6>
                                            <span>{props?.content?.my_city}</span>
                                        </li>
                                        <li>
                                            <h6>{props?.content?.age}:</h6>
                                            <span>{props?.content?.my_age}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={stylesContact.contactInformationContent}>
                                <div className={stylesContact.contactInformationContentPersonal}>
                                    <ul>
                                        <li>
                                            <h6>{props?.content?.email}:</h6>
                                            <span>{props?.content?.my_email}</span>
                                        </li>
                                        <li>
                                            <h6>{props?.content?.gmail}:</h6>
                                            <span>{props?.content?.my_gmail}</span>
                                        </li>
                                        <li>
                                            <h6>{props?.content?.chmail}:</h6>
                                            <span>{props?.content?.my_chmail}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={stylesContact.contactInformationContent}>
                                <div className={stylesContact.contactInformationContentPersonal}>
                                    <ul>
                                        <li>
                                            <h6>{props?.content?.phone}:</h6>
                                            <span>{props?.content?.my_phone}</span>
                                        </li>
                                        <li>
                                            <h6>{props?.content?.whatsapp}:</h6>
                                            <span>+</span>
                                        </li>
                                        <li>
                                            <h6>{props?.content?.telegram}:</h6>
                                            <span>+</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h4 className='heading'>{props?.content?.titles[4]}</h4>
                        <div className={stylesContact.contactInTouchParent}>
                            <div className={stylesContact.contactInTouch}>
                                <form>
                                    <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupInput)}>
                                        <input id='name' name='name' type='text' placeholder={props?.content?.name} required={true}/>
                                        <label htmlFor='name'><i className='bi-person'/></label>
                                    </div>
                                    <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupInput)}>
                                        <input id='email' name='email' type='email' placeholder={props?.content?.email} required={true}/>
                                        <label htmlFor='email'><i className='bi-envelope'/></label>
                                    </div>
                                    <div className={classnames(stylesContact.contactInTouchFormGroup, stylesContact.contactInTouchFormGroupMessageInput)}>
                                        <textarea id='message' name='message' placeholder={props?.content?.message} required={true}/>
                                        <label htmlFor='message'><i className='bi-text-paragraph'/></label>
                                    </div>
                                    <div className={stylesContact.contactInTouchFormGroup}>
                                        <button onClick={() => {  }} className={classnames(stylesButton.button, 'align-self-start')}>
                                            {props?.content?.send_message}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <div className='hr'/>
                </div>
            </Main>
        </>
    )
}

export default Contact;
