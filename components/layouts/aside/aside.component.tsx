import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { setOpenAside } from '../../../app/aside/aside.actions';
import { setActiveFilter } from '../../../app/filter/filter.actions';

const Aside = (props: any) =>
{
    const dispatch = useDispatch();
    const openAside: boolean = useSelector(((state: any) => state.aside.openAside));

    return (
        <nav className={`aside z-index__101 ${openAside ? 'open' : null}`}>
            <div className='aside__user'>
                <div className='aside__user--icon' onClick={() => { dispatch(setOpenAside(!openAside)); dispatch(setActiveFilter(!openAside)) }}>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-ellipsis-v'/>
                    </svg>
                </div>
                <span className='aside__user--profile'>
                    <img alt='im-parsa' className='aside__user--image' src='/image/my-profile.png'/>
                    <div className='aside__user--status-parent'>
                        <i className='aside__user--status'/>
                    </div>
                </span>
                <h5 className='aside__user--name'>
                    <Link href='/'>
                        <a>
                            {props?.content?.my_name}
                        </a>
                    </Link>
                </h5>
                <div className='aside__user--skills'>
                    {props?.content?.my_skills[0]}
                    <br/>
                    {props?.content?.my_skills[1]}
                </div>
            </div>
            <div className='aside__information'>
                <div className='aside__information--theme'>
                    <span onClick={() => { props.handleLanguage('en') }} className={props?.content?.language === 'en' ? 'aside__information--theme__active' : ''}>EN</span>
                    <span onClick={() => { props.handleLanguage('de') }} className={props?.content?.language === 'de' ? 'aside__information--theme__active' : ''}>GR</span>
                    <span onClick={() => { props.handleLanguage('fa') }} className={props?.content?.language === 'fa' ? 'aside__information--theme__active' : ''}>FA</span>
                </div>
                <div className='aside__divider'>&nbsp;</div>
                <div className='aside__information--personal'>
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
                <div className='aside__divider'>&nbsp;</div>
                <div className='aside__information--language'>
                    <div>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'
                                  strokeDasharray='100, 100'/>
                            <text x='18' y='20.35'>100%</text>
                        </svg>
                        <h6>{props?.content?.persian}</h6>
                    </div>
                    <div>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'
                                  strokeDasharray='70, 100'/>
                            <text x='18' y='20.35'>70%</text>
                        </svg>
                        <h6>{props?.content?.english}</h6>
                    </div>
                    <div>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'
                                  strokeDasharray='10, 100'/>
                            <text x='18' y='20.35'>10%</text>
                        </svg>
                        <h6>{props?.content?.german}</h6>
                    </div>
                </div>
                <div className='aside__divider'>&nbsp;</div>
                <div className='aside__information--skills'>
                    <div className='aside__information--skills__bar'>
                        <div className='aside__information--skills__info'>
                            <span>Javascript, Typescript</span>
                            <span>90%</span>
                        </div>
                        <div className='aside__information--skills__progress'>
                            <span style={{ maxWidth: '90%' }}/>
                        </div>
                    </div>
                    <div className='aside__information--skills__bar'>
                        <div className='aside__information--skills__info'>
                            <span>Node.js, Deno.js</span>
                            <span>95%</span>
                        </div>
                        <div className='aside__information--skills__progress'>
                            <span style={{ maxWidth: '95%' }}/>
                        </div>
                    </div>
                    <div className='aside__information--skills__bar'>
                        <div className='aside__information--skills__info'>
                            <span>React.js, Next.js</span>
                            <span>95%</span>
                        </div>
                        <div className='aside__information--skills__progress'>
                            <span style={{ maxWidth: '95%' }}/>
                        </div>
                    </div>
                    <div className='aside__information--skills__bar'>
                        <div className='aside__information--skills__info'>
                            <span>Styled, Sass, Scss</span>
                            <span>90%</span>
                        </div>
                        <div className='aside__information--skills__progress'>
                            <span style={{ maxWidth: '90%' }}/>
                        </div>
                    </div>
                    <div className='aside__information--skills__bar'>
                        <div className='aside__information--skills__info'>
                            <span>Photoshop</span>
                            <span>95%</span>
                        </div>
                        <div className='aside__information--skills__progress'>
                            <span style={{ maxWidth: '95%' }}/>
                        </div>
                    </div>
                    <div className='aside__information--skills__bar'>
                        <div className='aside__information--skills__info'>
                            <span>PHP</span>
                            <span>50%</span>
                        </div>
                        <div className='aside__information--skills__progress'>
                            <span style={{ maxWidth: '50%' }}/>
                        </div>
                    </div>
                </div>
                <div className='aside__divider'>&nbsp;</div>
                <div className='aside__information--library'>
                    <ul>
                        <li>
                            <svg>
                                <use xlinkHref='/svg/sprite.svg#icon-check'/>
                            </svg>
                            <span>Pug, HBS, EJS</span>
                        </li>
                        <li>
                            <svg>
                                <use xlinkHref='/svg/sprite.svg#icon-check'/>
                            </svg>
                            <span>Sass, Scss, Styled</span>
                        </li>
                        <li>
                            <svg>
                                <use xlinkHref='/svg/sprite.svg#icon-check'/>
                            </svg>
                            <span>Next.js, React.js, React Native</span>
                        </li>
                        <li>
                            <svg>
                                <use xlinkHref='/svg/sprite.svg#icon-check'/>
                            </svg>
                            <span>Photoshop, Gimp, After Effects</span>
                        </li>
                        <li>
                            <svg>
                                <use xlinkHref='/svg/sprite.svg#icon-check'/>
                            </svg>
                            <span>Node.js, Deno.js</span>
                        </li>
                        <li>
                            <svg>
                                <use xlinkHref='/svg/sprite.svg#icon-check'/>
                            </svg>
                            <span>Express.js, Nest.js</span>
                        </li>
                        <li>
                            <svg>
                                <use xlinkHref='/svg/sprite.svg#icon-check'/>
                            </svg>
                            <span>Poco, Curl, Apt</span>
                        </li>
                    </ul>
                </div>
                <div className='aside__divider'>&nbsp;</div>
                <div className='aside__information--cv uppercase'>
                    <a href={`/document/parsa_firoozi_cv-${props?.content?.language}.pdf`} rel='noreferrer' target='_blank'>
                        <span>{props?.content?.download_cv}</span>
                        <svg>
                            <use xlinkHref='/svg/sprite.svg#icon-download'/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='aside__footer'>
                <a href='https://www.instagram.com/hello_im_parsa' rel='noreferrer' target='_blank'>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-instagram'/>
                    </svg>
                </a>
                <a href='https://rarible.com/im-parsa' rel='noreferrer' target='_blank'>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-rarible'/>
                    </svg>
                </a>
                <a href='https://dribbble.com/hello_im_parsa' rel='noreferrer' target='_blank'>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-dribbble'/>
                    </svg>
                </a>
                <a href='https://github.com/im-parsa' rel='noreferrer' target='_blank'>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-github'/>
                    </svg>
                </a>
                <a href='https://www.linkedin.com/in/im-parsa-144247223/' rel='noreferrer' target='_blank'>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-linkedin'/>
                    </svg>
                </a>
            </div>
        </nav>
    );
};

export default Aside;
