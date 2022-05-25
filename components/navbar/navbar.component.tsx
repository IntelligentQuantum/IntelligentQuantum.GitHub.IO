import Link from 'next/link';

import { asideToggle, navbarToggle, handleLanguage } from '../../lib/utils';

const Navbar = (props: any) =>
{
    return (
        props.mobile
            ?
            <nav className='nav__mobile z-index__100'>
                <div className='nav__mobile--3dot' onClick={() => { asideToggle() }}>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-ellipsis-v'/>
                    </svg>
                </div>
                <div className='nav__mobile--hamburger' onClick={() => { navbarToggle() }}>
                    <div className='nav__mobile--hamburger__line open'>&nbsp;</div>
                </div>
            </nav>
            :
            <nav className='nav z-index__101'>
                <div className='nav__hamburger' onClick={() => { navbarToggle() }}>
                    <div className='nav__hamburger--line'>&nbsp;</div>
                </div>
                <div className='nav__content'>
                    <div className='nav__content--active'>
                        <p>{props?.content ? props?.content[props?.page] : null}</p>
                    </div>
                    <div className='nav__content--items'>
                        <Link href='/' passHref>
                            <a className={`nav__content--item ${props.page}-page`}>
                                {props?.content?.home}
                            </a>
                        </Link>
                        <Link href='/portfolio' passHref>
                            <a className={`nav__content--item ${props.page}-page`}>
                                {props?.content?.portfolio}
                            </a>
                        </Link>
                        <Link href='/contact' passHref>
                            <a className={`nav__content--item ${props.page}-page`}>
                                {props?.content?.contact}
                            </a>
                        </Link>
                        <Link href='/funny' passHref>
                            <a className={`nav__content--item ${props.page}-page`}>
                                {props?.content?.funny}
                            </a>
                        </Link>
                        <Link href='/blogs' passHref>
                            <a className={`nav__content--item ${props.page}-page`}>
                                {props?.content?.blogs}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='nav__languages'>
                    <span onClick={() => { handleLanguage('en'); props.handleLanguage() }} id='en-lang' className={props?.content?.language === 'en' ? 'nav__languages--active' : ''}>EN</span>
                    <span onClick={() => { handleLanguage('gr'); props.handleLanguage() }} id='gr-lang' className={props?.content?.language === 'gr' ? 'nav__languages--active' : ''}>GR</span>
                    <span onClick={() => { handleLanguage('pr'); props.handleLanguage() }} id='pr-lang' className={props?.content?.language === 'pr' ? 'nav__languages--active' : ''}>PR</span>
                </div>
            </nav>
    );
};

export default Navbar;
