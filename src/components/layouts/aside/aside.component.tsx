import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { BsGithub, BsCheck, BsDownload, BsInstagram, BsLinkedin, BsDribbble } from 'react-icons/bs';

import type { IContent } from '../../../interfaces/content';

import { setOpenAside } from '../../../app/aside/aside.actions';
import { setActiveFilter } from '../../../app/filter/filter.actions';

import stylesAside from '../../../styles/components/aside.module.scss';

import Profile from '../../../../public/static/images/im-parsa.png';
import Rarible from '../../../../public/static/icons/icon-rarible.svg';
import Ellipsis from '../../../../public/static/icons/icon-ellipsis.svg';

const Aside = (props: { content: IContent, handleLanguage: any }) =>
{
    const dispatch = useDispatch();
    const openAside: boolean = useSelector((state: any) => state.aside.openAside);

    return (
        <nav className={classnames(stylesAside.aside, 'z-index__101')} data-open={openAside}>
            <div className={stylesAside.asideUser}>
                <div className={stylesAside.asideUserIcon} onClick={() =>
                {
                    dispatch(setOpenAside(!openAside)); dispatch(setActiveFilter(!openAside));
                }}>
                    <Ellipsis />
                </div>

                <div className={stylesAside.asideUserProfile}>
                    <Image
                        src={Profile}
                        alt='Parsa Firoozi'
                        className={stylesAside.asideUserProfile}
                        layout='intrinsic'
                        width={100}
                        height={100}
                    />
                    <div className={stylesAside.asideUserStatusParent}>
                        <i className={stylesAside.asideUserStatus}/>
                    </div>
                </div>

                <h1 className={stylesAside.asideUserName}>
                    <Link href='/'>
                        <a>
                            { props?.content?.my_name }
                        </a>
                    </Link>
                </h1>

                <h3 className={stylesAside.asideUserSkills}>
                    { props?.content?.my_skills[0] }
                    <br/>
                    { props?.content?.my_skills[1] }
                </h3>
            </div>

            <div className={stylesAside.asideInformation}>
                <div className={stylesAside.asideInformationLanguage}>
                    <span onClick={() =>
                    {
                        props.handleLanguage('en');
                    }} className={props?.content?.language === 'en' ? stylesAside.asideInformationLanguageActive : ''}>EN</span>
                    <span onClick={() =>
                    {
                        props.handleLanguage('de');
                    }} className={props?.content?.language === 'de' ? stylesAside.asideInformationLanguageActive : ''}>DE</span>
                    <span onClick={() =>
                    {
                        props.handleLanguage('fa');
                    }} className={props?.content?.language === 'fa' ? stylesAside.asideInformationLanguageActive : ''}>FA</span>
                </div>

                <div className={stylesAside.asideDivider} />

                <div className={stylesAside.asideInformationPersonal}>
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

                <div className={stylesAside.asideDivider} />

                <div className={stylesAside.asideInformationLanguages}>
                    <div>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='100, 100'/>
                            <text x='18' y='20.35'>
                                100%
                            </text>
                        </svg>
                        <h6>
                            {props?.content?.persian}
                        </h6>
                    </div>
                    <div>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='70, 100'/>
                            <text x='18' y='20.35'>
                                70%
                            </text>
                        </svg>
                        <h6>{props?.content?.english}</h6>
                    </div>
                    <div>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='10, 100'/>
                            <text x='18' y='20.35'>
                                10%
                            </text>
                        </svg>
                        <h6>
                            {props?.content?.german}
                        </h6>
                    </div>
                </div>

                <div className={stylesAside.asideDivider} />

                <div className={stylesAside.asideInformationSkills}>
                    <div className={stylesAside.asideInformationSkillsBar}>
                        <div className={stylesAside.asideInformationSkillsInfo}>
                            <span>
                                Javascript, Typescript
                            </span>
                            <span>
                                90%
                            </span>
                        </div>
                        <div className={stylesAside.asideInformationSkillsProgress}>
                            <span style={{ maxWidth: '90%' }}/>
                        </div>
                    </div>
                    <div className={stylesAside.asideInformationSkillsBar}>
                        <div className={stylesAside.asideInformationSkillsInfo}>
                            <span>
                                 NodeJS, NestJS, DenoJS
                            </span>
                            <span>
                                95%
                            </span>
                        </div>
                        <div className={stylesAside.asideInformationSkillsProgress}>
                            <span style={{ maxWidth: '95%' }}/>
                        </div>
                    </div>
                    <div className={stylesAside.asideInformationSkillsBar}>
                        <div className={stylesAside.asideInformationSkillsInfo}>
                            <span>
                                ReactJS, NextJS
                            </span>
                            <span>
                                95%
                            </span>
                        </div>
                        <div className={stylesAside.asideInformationSkillsProgress}>
                            <span style={{ maxWidth: '95%' }}/>
                        </div>
                    </div>
                    <div className={stylesAside.asideInformationSkillsBar}>
                        <div className={stylesAside.asideInformationSkillsInfo}>
                            <span>
                                Sass, Styled, Css
                            </span>
                            <span>
                                90%
                            </span>
                        </div>
                        <div className={stylesAside.asideInformationSkillsProgress}>
                            <span style={{ maxWidth: '90%' }}/>
                        </div>
                    </div>
                    <div className={stylesAside.asideInformationSkillsBar}>
                        <div className={stylesAside.asideInformationSkillsInfo}>
                            <span>
                                Photoshop, Gimp
                            </span>
                            <span>
                                95%
                            </span>
                        </div>
                        <div className={stylesAside.asideInformationSkillsProgress}>
                            <span style={{ maxWidth: '95%' }}/>
                        </div>
                    </div>
                    <div className={stylesAside.asideInformationSkillsBar}>
                        <div className={stylesAside.asideInformationSkillsInfo}>
                            <span>
                                C++, Poco, Qt
                            </span>
                            <span>
                                35%
                            </span>
                        </div>
                        <div className={stylesAside.asideInformationSkillsProgress}>
                            <span style={{ maxWidth: '35%' }}/>
                        </div>
                    </div>
                    <div className={stylesAside.asideInformationSkillsBar}>
                        <div className={stylesAside.asideInformationSkillsInfo}>
                            <span>
                                PHP
                            </span>
                            <span>
                                50%
                            </span>
                        </div>
                        <div className={stylesAside.asideInformationSkillsProgress}>
                            <span style={{ maxWidth: '50%' }}/>
                        </div>
                    </div>
                </div>

                <div className={stylesAside.asideDivider} />

                <div className={stylesAside.asideInformationLibrary}>
                    <ul>
                        <li>
                            <BsCheck />
                            <span>
                                JavaScript, TypeScript
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                NextJS, ReactJS, React Native
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                 NodeJS, DenoJS, NestJS
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                PHP
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                C++, Qt, Poco
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                Electron, Express.js, Discord.js
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                Mongodb, Redis, SQL
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                Pug, HBS, EJS
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                HTML5, CSS3, JS
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                Sass, Styled, Less
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                Photoshop, Gimp, After Effects
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                Git, Github, GitLab
                            </span>
                        </li>
                        <li>
                            <BsCheck />
                            <span>
                                Curl, Apt, Apt-Get
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={stylesAside.asideDivider} />

                <div className={classnames(stylesAside.asideInformationCV, 'uppercase')}>
                    <a href={`/static/document/parsa_firoozi_cv-${ props?.content?.language }.pdf`} target='_blank' rel='noreferrer'>
                        <BsDownload />
                        <span>
                            { props?.content?.download_cv }
                        </span>
                    </a>
                </div>
            </div>

            <div className={stylesAside.asideFooter}>
                <a href='https://www.instagram.com/hello_im_parsa' target='_blank' rel='noreferrer'>
                    <BsInstagram />
                </a>
                <a href='https://rarible.com/im-parsa' target='_blank' rel='noreferrer'>
                    <Rarible />
                </a>
                <a href='https://dribbble.com/hello_im_parsa' target='_blank' rel='noreferrer'>
                    <BsDribbble />
                </a>
                <a href='https://github.com/im-parsa' target='_blank' rel='noreferrer'>
                    <BsGithub />
                </a>
                <a href='https://www.linkedin.com/in/im-parsa/' target='_blank' rel='noreferrer'>
                    <BsLinkedin />
                </a>
            </div>
        </nav>
    );
};

export default Aside;
