import Image from 'next/image';
import Link from 'next/link';
import classes from 'classnames';

import { skills } from '../../../data/skills.data';
import { libraries } from '../../../data/libraries.data';

import { BsCheck, BsDribbble, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgSoftwareDownload } from 'react-icons/cg';

import styles from './aside.module.scss';

const Aside = () =>
{
    return (
        <aside className={styles.aside}>
            <div className={styles.asideUser}>
                <span className={styles.asideUserImageContainer}>
                    <Image
                        className={styles.asideUserImage}
                        src='/images/IntelligentQuantum.jpg'
                        alt='IntelligentQuantum'
                        layout='intrinsic'
                        width={100}
                        height={100}
                    />
                    <span className={styles.asideUserImageContainerStatus} />
                </span>

                <div className={styles.asideUserInfoContainer}>
                    <Link href='/'>
                        <a className={styles.asideUserName}>IntelligentQuantum</a>
                    </Link>
                    <span className={styles.asideUserTitle}>Full-Stack Developer</span>
                    <span className={styles.asideUserTitle}>UI/UX Designer</span>
                </div>
            </div>

            <div className={styles.asideInformation}>
                <div className={styles.asideInformationWebLanguages}>
                    <span className={classes([styles.asideInformationWebLanguagesOption, styles.asideInformationWebLanguagesOptionActive])}>EN</span>
                    <span className={styles.asideInformationWebLanguagesOption}>DE</span>
                    <span className={styles.asideInformationWebLanguagesOption}>FA</span>
                </div>

                <div className={styles.aside__divider} />

                <ul className={styles.asideInformationPersonalList}>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>Residence:</span>
                        <span>Iran</span>
                    </li>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>City:</span>
                        <span>Shiraz</span>
                    </li>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>Age:</span>
                        <span>25</span>
                    </li>
                </ul>

                <div className={styles.aside__divider} />

                <div className={styles.asideInformationPersonalLanguages}>
                    <div className={styles.asideInformationPersonalLanguagesContent}>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='100, 100'/>
                            <text x='18' y='20.35'>100%</text>
                        </svg>
                        <span>Persian</span>
                    </div>
                    <div className={styles.asideInformationPersonalLanguagesContent}>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='50, 100'/>
                            <text x='18' y='20.35'>50%</text>
                        </svg>
                        <span>English</span>
                    </div>
                    <div className={styles.asideInformationPersonalLanguagesContent}>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='30, 100'/>
                            <text x='18' y='20.35'>30%</text>
                        </svg>
                        <span>German</span>
                    </div>
                </div>

                <div className={styles.aside__divider} />

                <div className={styles.asideInformationSkills}>
                    {
                        skills.map(skill =>
                        {
                            return (
                                <div className={styles.asideInformationSkillsBar} key={skill.id}>
                                    <div className={styles.asideInformationSkillsBarInfo}>
                                        <span>{skill.name}</span>
                                        <span>{skill.progress}</span>
                                    </div>
                                    <div className={styles.asideInformationSkillsBarProgress}>
                                        <span className={styles.asideInformationSkillsBarProgressActive} style={{ width: skill.progressActive }} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className={styles.aside__divider} />

                <ul className={styles.asideInformationLibrariesList}>
                    {
                        libraries.map(library =>
                        {
                            return (
                                <li className={styles.asideInformationLibrariesListItems} key={library.id}>
                                    <BsCheck />
                                    <span>{library.names}</span>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className={styles.aside__divider} />

                <a href="#" className={styles.asideInformationCV}>
                    <span>DOWNLOAD CV</span>
                    <CgSoftwareDownload />
                </a>
            </div>

            <div className={styles.asideFooter}>
                <a href="https://www.instagram.com/intelligentquantum/">
                    <BsInstagram />
                </a>
                <a href="https://dribbble.com/intelligentquantum">
                    <BsDribbble />
                </a>
                <a href="https://twitter.com/IntelligentQM">
                    <BsTwitter />
                </a>
                <a href="https://github.com/intelligentquantum">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/intelligent-quantum-330931177/">
                    <BsLinkedin />
                </a>
            </div>
        </aside>
    );
};

export default Aside;
