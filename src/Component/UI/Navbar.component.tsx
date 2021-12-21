import React from "react";
import { Link } from 'react-router-dom';
import { AsideToggle, NavbarToggle, HandleLanguage } from "../../Utils/Utils.service";

const Navbar = (props: any) =>
{
    let MainEl;
    let EnActive;
    let GrActive;
    let PrActive;

    if (props.mobile)
    {
        MainEl =
            <nav className="nav__mobile z-index__100">
                <div className="nav__mobile--3dot" onClick={() => { AsideToggle() }}>
                    <svg>
                        <use xlinkHref="/svg/sprite.svg#icon-ellipsis-v"/>
                    </svg>
                </div>
                <div className="nav__mobile--hamburger" onClick={() => { NavbarToggle() }}>
                    <div className="nav__mobile--hamburger__line open">&nbsp;</div>
                </div>
            </nav>
    }
    else
    {
        if (props.content.language === "en")
        {
            EnActive = "nav__languages--active"
        }
        else if (props.content.language === "gr")
        {
            GrActive = "nav__languages--active"
        }
        else if (props.content.language === "pr")
        {
            PrActive = "nav__languages--active"
        }

        MainEl =
            <nav className="nav z-index__101">
                <div className="nav__hamburger" onClick={() => { NavbarToggle() }}>
                    <div className="nav__hamburger--line">&nbsp;</div>
                </div>
                <div className="nav__content">
                    <div className="nav__content--active">
                        <p>{props.activeContent}</p>
                    </div>
                    <div className='nav__content--items'>
                        <Link to='/' className={`nav__content--item ${props.page}-page`}>{props.content.home}</Link>
                        <Link to='/portfolio' className={`nav__content--item ${props.page}-page`}>{props.content.portfolio}</Link>
                        <Link to='/contact' className={`nav__content--item ${props.page}-page`}>{props.content.contact}</Link>
                        <Link to='/funny' className={`nav__content--item ${props.page}-page`}>{props.content.funny}</Link>
                        <Link to='/blogs' className={`nav__content--item ${props.page}-page`}>{props.content.blogs}</Link>
                    </div>
                </div>
                <div className="nav__languages">
                    <span onClick={() => { HandleLanguage('en'); props.HandleLanguage() }} id='en-lang' className={EnActive}>EN</span>
                    <span onClick={() => { HandleLanguage('gr'); props.HandleLanguage() }} id='gr-lang' className={GrActive}>GR</span>
                    <span onClick={() => { HandleLanguage('pr'); props.HandleLanguage() }} id='pr-lang' className={PrActive}>PR</span>
                </div>
            </nav>
    }

    return (MainEl);
};

export default Navbar;
