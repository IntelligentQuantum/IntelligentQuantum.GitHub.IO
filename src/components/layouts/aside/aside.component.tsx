import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidV4 } from 'uuid';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { FaEllipsisV } from 'react-icons/fa';
import React, { Fragment, useEffect } from 'react';
import { BiCheck, BiDownload } from 'react-icons/bi';
import { CircularProgressbar } from 'react-circular-progressbar';
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';

import Profile from '../../../../public/static/images/profile.png';

import data from '../../../../public/static/data/data.json';

import skills from '../../../../public/static/data/skills.data.json';
import socials from '../../../../public/static/data/socials.data.json';
import languages from '../../../../public/static/data/languages.data.json';
import libraries from '../../../../public/static/data/libraries.data.json';

import type { ISkill } from '../../../interfaces/skill';
import type { ILanguages } from '../../../types/language';
import type { ISocial } from '../../../interfaces/social';
import type { ILibrary } from '../../../interfaces/library';
import type { IContent } from '../../../interfaces/content';
import type { ILanguage } from '../../../interfaces/language';

import 'react-circular-progressbar/dist/styles.css';
import stylesAside from '../../../styles/components/aside.module.scss';

import { useAppSelector } from '../../../redux/app/hooks';
import { toggleAside, toggleFilter } from '../../../redux/features/layout/layout-slice';

const Aside = () =>
{
    const router = useRouter();
    const dispatch = useDispatch();

    const aside: any = useAppSelector(state => state.layout.aside);

    const content = data[router.locale as ILanguages] as IContent;

    const handleClickAside = () =>
    {
        dispatch(toggleAside(!aside));
        dispatch(toggleFilter(!aside));
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
        <aside className={classnames(stylesAside.aside, 'z-index__101', (aside ? stylesAside.aside__Open : null))}>
            <div className={stylesAside.asideUser}>
                <i className={stylesAside.asideUserIcon} onClick={ handleClickAside }>
                    <FaEllipsisV />
                </i>
                <div className={stylesAside.asideUserProfile}>
                    <Image
                        src={Profile}
                        alt={ content.my_name }
                        className={stylesAside.asideUserProfile}
                        layout='intrinsic'
                        width={750}
                        height={750}
                    />
                    <span className={stylesAside.asideUserStatusParent}>
                        <i className={stylesAside.asideUserStatus}/>
                    </span>
                </div>
                <h1 className={stylesAside.asideUserName}>{ content.my_name }</h1>
                <h3 className={stylesAside.asideUserSkills}>{ content.my_skills[0] }</h3>
                <h3 className={stylesAside.asideUserSkills}>{ content.my_skills[1] }</h3>
            </div>
            <div className={stylesAside.asideInformation}>
                <ul className={stylesAside.asideInformationLanguage}>
                    <li className={content.language === 'en' ? stylesAside.asideInformationLanguage__Active : ''}>
                        <Link href={ router.asPath } locale='en' legacyBehavior><a>EN</a></Link>
                    </li>
                    <li className={content.language === 'de' ? stylesAside.asideInformationLanguage__Active : ''}>
                        <Link href={ router.asPath } locale='de' legacyBehavior><a>DE</a></Link>
                    </li>
                    <li className={content.language === 'fa' ? stylesAside.asideInformationLanguage__Active : ''}>
                        <Link href={ router.asPath } locale='fa' legacyBehavior><a>FA</a></Link>
                    </li>
                </ul>
                <span className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationPersonal}>
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
                </ul>
                <span className={stylesAside.asideDivider}/>
                <ul className={stylesAside.asideInformationLanguages}>
                    {
                        languages.items.map((language: ILanguage) =>
                            (
                                <li key={ uuidV4() }>
                                    <CircularProgressbar value={language.percentage} text={`${ language.percentage }%`} />
                                    <h4>{ content[language.name as 'persian' | 'english' | 'german'] }</h4>
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
                    <a href={`/static/document/parsa_firoozi_cv-${ content.language }.pdf`} target='_blank' rel='noreferrer'>
                        <BiDownload />
                        <span>{ content.download_cv }</span>
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
