import React from 'react';
import Image from 'next/image';
import { v4 as uuidV4 } from 'uuid';
import classnames from 'classnames';
import { BiCheck, BiDownload } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';

import { skills } from '../../../../public/static/data/skills.data.json';
import { socials } from '../../../../public/static/data/socials.data.json';
import { libraries } from '../../../../public/static/data/libraries.data.json';

import type { IContent } from '../../../interfaces/content';
import type { ILanguage } from '../../../interfaces/language';

import { setOpenAside } from '../../../app/aside/aside.actions';
import { setActiveFilter } from '../../../app/filter/filter.actions';

import stylesAside from '../../../styles/components/aside.module.scss';

import Profile from '../../../../public/static/images/im-parsa.png';
import Ellipsis from '../../../../public/static/icons/icon-ellipsis.svg';

const Aside = (props: { content: IContent, handleLanguage: (theme?: ILanguage) => void }) =>
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
                    { props.content.my_name }
                </h1>
                <h3 className={stylesAside.asideUserSkills}>
                    { props.content.my_skills[0] }
                </h3>
                <h3 className={stylesAside.asideUserSkills}>
                    { props.content.my_skills[1] }
                </h3>
            </div>
            <div className={stylesAside.asideInformation}>
                <div className={stylesAside.asideInformationLanguage}>
                    <span onClick={() =>
                    {
                        props.handleLanguage('en');
                    }} className={props.content.language === 'en' ? stylesAside.asideInformationLanguageActive : ''}>EN</span>
                    <span onClick={() =>
                    {
                        props.handleLanguage('de');
                    }} className={props.content.language === 'de' ? stylesAside.asideInformationLanguageActive : ''}>DE</span>
                    <span onClick={() =>
                    {
                        props.handleLanguage('fa');
                    }} className={props.content.language === 'fa' ? stylesAside.asideInformationLanguageActive : ''}>FA</span>
                </div>
                <div className={stylesAside.asideDivider}/>
                <div className={stylesAside.asideInformationPersonal}>
                    <ul>
                        <li>
                            <h6>{props.content.residence}:</h6>
                            <h3>{props.content.my_residence}</h3>
                        </li>
                        <li>
                            <h6>{props.content.city}:</h6>
                            <h3>{props.content.my_city}</h3>
                        </li>
                        <li>
                            <h6>{props.content.age}:</h6>
                            <h5>{new Date().getFullYear() - props.content.my_age}</h5>
                        </li>
                    </ul>
                </div>
                <div className={stylesAside.asideDivider}/>
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
                            {props.content.persian}
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
                        <h6>{props.content.english}</h6>
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
                            {props.content.german}
                        </h6>
                    </div>
                </div>
                <div className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationSkills}>
                    {
                        skills.map((skill: { name: string, progress: string }) =>
                            (
                                <li className={stylesAside.asideInformationSkillsBar} key={uuidV4()}>
                                    <div className={stylesAside.asideInformationSkillsInfo}>
                                        <h3>{ skill.name }</h3>
                                        <span>{ skill.progress }</span>
                                    </div>
                                    <div className={stylesAside.asideInformationSkillsProgress}>
                                        <span style={{ maxWidth: skill.progress }}/>
                                    </div>
                                </li>
                            ))
                    }
                </ul>
                <div className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationLibrary}>
                    {
                        libraries.map((library: { names: string[] }) =>
                            (
                                <li key={uuidV4()}>
                                    <BiCheck />
                                    <p>
                                        {
                                            library.names.map((name: string, indexV: number) =>
                                                (
                                                    <>
                                                        <span key={uuidV4()}>{ name }</span>
                                                        { library.names.length === (indexV + 1) ? null : ',' }
                                                    </>
                                                ))
                                        }
                                    </p>
                                </li>
                            ))
                    }
                </ul>
                <div className={stylesAside.asideDivider}/>
                <div className={classnames(stylesAside.asideInformationCV, 'uppercase')}>
                    <a href={`/static/document/parsa_firoozi_cv-${ props.content.language }.pdf`} target='_blank' rel='noreferrer'>
                        <BiDownload />
                        <span>{ props.content.download_cv }</span>
                    </a>
                </div>
            </div>
            <div className={stylesAside.asideFooter}>
                {
                    socials.map((social: { link: string, type: string }) =>
                        (
                            <a href={ social.link } target='_blank' rel='noreferrer' key={ uuidV4() }>
                                {
                                    social.type === 'INSTAGRAM'
                                        ? <BsInstagram />
                                        : social.type === 'FACEBOOK'
                                            ? <BsFacebook />
                                            : social.type === 'TWITTER'
                                                ? <BsTwitter />
                                                : social.type === 'YOUTUBE'
                                                    ? <BsYoutube />
                                                    : social.type === 'GITHUB'
                                                        ? <BsGithub />
                                                        : social.type === 'LINKEDIN'
                                                            ? <BsLinkedin />
                                                            : null
                                }
                            </a>
                        ))
                }
            </div>
        </nav>
    );
};

export default Aside;
