import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { setOpenAside } from '../../../app/aside/aside.actions';
import { setOpenNavbar } from '../../../app/navbar/navbar.actions';
import { setActiveFilter } from '../../../app/filter/filter.actions';

const Navbar = (props: any) =>
{
    const dispatch = useDispatch();
    const openAside: boolean = useSelector(((state: any) => state.aside.openAside));
    const openNavbar: boolean = useSelector(((state: any) => state.navbar.openNavbar));
    const activeFilter: boolean = useSelector(((state: any) => state.filter.activeFilter));

    return (
        props.mobile
            ?
            <nav className='nav__mobile z-index__100'>
                <div className='nav__mobile--3dot' onClick={() => { dispatch(setOpenAside(!openAside)); dispatch(setActiveFilter(!activeFilter)) }}>
                    <svg>
                        <use xlinkHref='/svg/sprite.svg#icon-ellipsis-v'/>
                    </svg>
                </div>
                <div className='nav__mobile--hamburger' onClick={() => { dispatch(setOpenNavbar(!openNavbar)); dispatch(setActiveFilter(!activeFilter)) }}>
                    <div className='nav__mobile--hamburger__line open'>&nbsp;</div>
                </div>
            </nav>
            :
            <nav className={`nav z-index__101 ${openNavbar ? 'open' : null}`}>
                <div className='nav__hamburger' onClick={() => { dispatch(setOpenNavbar(!openNavbar)); dispatch(setActiveFilter(!activeFilter)) }}>
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
                    <span onClick={() => { props.handleLanguage('en') }} className={props?.content?.language === 'en' ? 'nav__languages--active' : ''}>EN</span>
                    <span onClick={() => { props.handleLanguage('de') }} className={props?.content?.language === 'de' ? 'nav__languages--active' : ''}>GR</span>
                    <span onClick={() => { props.handleLanguage('fa') }} className={props?.content?.language === 'fa' ? 'nav__languages--active' : ''}>FA</span>
                </div>
            </nav>
    );
};

export default Navbar;
