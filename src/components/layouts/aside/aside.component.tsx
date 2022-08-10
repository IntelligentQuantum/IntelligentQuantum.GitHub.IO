import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import type { IContent } from '../../../interfaces/content';

import { setOpenAside } from '../../../app/aside/aside.actions';
import { setActiveFilter } from '../../../app/filter/filter.actions';

import stylesAside from '../../../styles/components/aside.module.scss';

import Check from '../../../public/static/icons/icon-check.svg';

import Github from '../../../public/static/icons/icon-github.svg';
import Rarible from '../../../public/static/icons/icon-rarible.svg';
import Download from '../../../public/static/icons/icon-download.svg';
import Ellipsis from '../../../public/static/icons/icon-ellipsis.svg';
import Dribbble from '../../../public/static/icons/icon-dribbble.svg';
import Linkedin from '../../../public/static/icons/icon-linkedin.svg';
import Instagram from '../../../public/static/icons/icon-instagram.svg';

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
                        src='/static/images/my-profile.png'
                        alt='im-parsa - Parsa Firoozi'
                        layout='fill'
                    />
                    <div className={stylesAside.asideUserStatusParent}>
                        <i className={stylesAside.asideUserStatus}/>
                    </div>
                </div>
                <h5 className={stylesAside.asideUserName}>
                    <Link href='/'>
                        <a>
                            {props?.content?.my_name}
                        </a>
                    </Link>
                </h5>
                <div className={stylesAside.asideUserSkills}>
                    {props?.content?.my_skills[0]}
                    <br/>
                    {props?.content?.my_skills[1]}
                </div>
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
                <div className={stylesAside.asideDivider}>&nbsp;</div>
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
                <div className={stylesAside.asideDivider}>&nbsp;</div>
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
                <div className={stylesAside.asideDivider}>&nbsp;</div>
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
                                Styled, Sass, Scss
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
                <div className={stylesAside.asideDivider}>&nbsp;</div>
                <div className={stylesAside.asideInformationLibrary}>
                    <ul>
                        <li>
                            <Check />
                            <span>
                                JavaScript, TypeScript, PHP, Lua
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                NextJS, ReactJS, React Native
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                Electron, Express.js, Discord.js
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                Mongodb, Redis, SQL
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                 NodeJS, DenoJS, NestJS
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                Pug, HBS, EJS
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                HTML5, CSS3, JS
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                Sass, Scss, Styled, Less
                            </span>
                        </li>
                        <li>
                            <Check />

                            <span>
                                Photoshop, Gimp, After Effects
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                Git, Github, GitLab
                            </span>
                        </li>
                        <li>
                            <Check />
                            <span>
                                Poco, Curl, Apt
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={stylesAside.asideDivider}>&nbsp;</div>
                <div className={classnames(stylesAside.asideInformationCV, 'uppercase')}>
                    <a href={`/static/document/parsa_firoozi_cv-${ props?.content?.language }.pdf`} target='_blank' rel='noreferrer'>
                        <span>{props?.content?.download_cv}</span>
                        <Download />
                    </a>
                </div>
            </div>
            <div className={stylesAside.asideFooter}>
                <a href='https://www.instagram.com/hello_im_parsa' target='_blank' rel='noreferrer'>
                    <Instagram />
                </a>
                <a href='https://rarible.com/im-parsa' target='_blank' rel='noreferrer'>
                    <Rarible />
                </a>
                <a href='https://dribbble.com/hello_im_parsa' target='_blank' rel='noreferrer'>
                    <Dribbble />
                </a>
                <a href='https://github.com/im-parsa' target='_blank' rel='noreferrer'>
                    <Github />
                </a>
                <a href='https://www.linkedin.com/in/im-parsa/' target='_blank' rel='noreferrer'>
                    <Linkedin />
                </a>
            </div>
        </nav>
    );
};

export default Aside;
