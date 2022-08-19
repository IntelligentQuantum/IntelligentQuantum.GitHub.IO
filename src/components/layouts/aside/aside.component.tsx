import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidV4 } from 'uuid';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { FaEllipsisV } from 'react-icons/fa';
import React, { Fragment, useEffect } from 'react';
import { BiCheck, BiDownload } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';

import skills from '../../../../public/static/data/skills.data.json';
import socials from '../../../../public/static/data/socials.data.json';
import languages from '../../../../public/static/data/languages.data.json';
import libraries from '../../../../public/static/data/libraries.data.json';

import type { ISkill } from '../../../interfaces/skill';
import type { ISocial } from '../../../interfaces/social';
import type { ILibrary } from '../../../interfaces/library';
import type { IContent } from '../../../interfaces/content';
import type { ILanguage } from '../../../interfaces/language';

import 'react-circular-progressbar/dist/styles.css';
import stylesAside from '../../../styles/components/aside.module.scss';

import Profile from '../../../../public/static/images/im-parsa.png';

import { selectAsideOpen, toggleAside, toggleFilter } from '../../../store/features/header-slice';

const Aside = (props: { content: IContent }) =>
{
    const router = useRouter();
    const dispatch = useDispatch();

    const openAside = useSelector(selectAsideOpen);

    const handleClickAside = () =>
    {
        dispatch(toggleAside(!openAside));
        dispatch(toggleFilter(!openAside));
    };

    useEffect(() =>
    {
        const htmlElement: HTMLElement | null = document.querySelector('html');

        if (htmlElement)
        {
            htmlElement.setAttribute('lang', router.locale as string);
            htmlElement.setAttribute('data-language', router.locale as string);
            htmlElement.setAttribute('dir', (router.locale === 'fa' ? 'rtl' : 'ltr'));
        }
    }, [router.locale]);

    return (
        <aside className={classnames(stylesAside.aside, 'z-index__101', (openAside ? stylesAside.aside__Open : null))}>
            <div className={stylesAside.asideUser}>
                <div className={stylesAside.asideUserIcon} onClick={() => handleClickAside}>
                    <FaEllipsisV />
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
                    <span className={stylesAside.asideUserStatusParent}>
                        <i className={stylesAside.asideUserStatus}/>
                    </span>
                </div>
                <h1 className={stylesAside.asideUserName}>{ props.content.my_name }</h1>
                <h3 className={stylesAside.asideUserSkills}>{ props.content.my_skills[0] }</h3>
                <h3 className={stylesAside.asideUserSkills}>{ props.content.my_skills[1] }</h3>
            </div>
            <div className={stylesAside.asideInformation}>
                <ul className={stylesAside.asideInformationLanguage}>
                    <li className={props.content.language === 'en' ? stylesAside.asideInformationLanguage__Active : ''}>
                        <Link href={ router.pathname } locale='en'><a>EN</a></Link>
                    </li>
                    <li className={props.content.language === 'de' ? stylesAside.asideInformationLanguage__Active : ''}>
                        <Link href={ router.pathname } locale='de'><a>DE</a></Link>
                    </li>
                    <li className={props.content.language === 'fa' ? stylesAside.asideInformationLanguage__Active : ''}>
                        <Link href={ router.pathname } locale='fa'><a>FA</a></Link>
                    </li>
                </ul>
                <span className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationPersonal}>
                    <li>
                        <h3>
                            <span>{ props.content.residence }: </span>
                            { props.content.my_residence }
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <span>{ props.content.city }: </span>
                            { props.content.my_city }
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <span>{ props.content.age }: </span>
                            { new Date().getFullYear() - props.content.my_age }
                        </h3>
                    </li>
                </ul>
                <span className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationLanguages}>
                    {
                        languages.items.map((language: ILanguage) =>
                            (
                                <li key={ uuidV4() }>
                                    <CircularProgressbar value={language.percentage} text={`${ language.percentage }%`} />
                                    <h4>{ props.content[language.name as 'persian' | 'english' | 'german'] }</h4>
                                </li>
                            ))
                    }
                </ul>
                <div className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationSkills}>
                    {
                        skills.items.map((skill: ISkill) =>
                            (
                                <li className={stylesAside.asideInformationSkillsBar} key={ uuidV4() }>
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
                <span className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationLibrary}>
                    {
                        libraries.items.map((library: ILibrary) =>
                            (
                                <li key={ uuidV4() }>
                                    <BiCheck />
                                    <p>
                                        {
                                            library.names.map((name: string, indexV: number) =>
                                                (
                                                    <Fragment key={ uuidV4() }>
                                                        <span>{ name }</span>
                                                        { library.names.length === (indexV + 1) ? null : ',' }
                                                    </Fragment>
                                                ))
                                        }
                                    </p>
                                </li>
                            ))
                    }
                </ul>
                <span className={stylesAside.asideDivider}/>
                <div className={classnames(stylesAside.asideInformationCV, 'uppercase')}>
                    <a href={`/static/document/parsa_firoozi_cv-${ props.content.language }.pdf`} target='_blank' rel='noreferrer'>
                        <BiDownload />
                        <span>{ props.content.download_cv }</span>
                    </a>
                </div>
            </div>
            <div className={stylesAside.asideFooter}>
                {
                    socials.items.map((social: ISocial) =>
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
        </aside>
    );
};

export default Aside;
