import React, { useEffect, useState, useCallback } from 'react';

import data from '../../Assets/Data/data.json';
import Aside from "../../Component/UI/Aside.component";
import Navbar from "../../Component/UI/Navbar.component";
import Footer from "../../Component/UI/Footer.component";
import Portfolio from "../../Component/Layout/Portfolio/Portfolio.component";
import { RemoveClass } from "../../Utils/Utils.service";

const PortfolioPage = () =>
{
    const [Language, SetLanguage]: [Language: 'en' | 'gr' | 'pr', SetLanguage: any] = useState('en');
    const LanguageHandle = useCallback(
        () =>
        {
            SetLanguage(localStorage.getItem('language'))
        }, [SetLanguage]);

    useEffect(() =>
    {
        LanguageHandle()
    }, [LanguageHandle]);

    return (
        <main className='container'>
            <div className="filter"/>
            <div className="filter filter__plus"/>
            <div className='portfolio__image'>
                <nav>
                    <div className="nav__mobile--hamburger__open" onClick={() => { RemoveClass('.portfolio__image', 'active'); RemoveClass('.filter__plus', 'active'); RemoveClass('.filter', 'z-index__104'); }}>
                        <div className="nav__mobile--hamburger__open--line">&nbsp;</div>
                    </div>
                </nav>
                <img id='portfolio__image' src='' alt='' onClick={() => { RemoveClass('.portfolio__image', 'active'); RemoveClass('.filter__plus', 'active'); RemoveClass('.filter', 'z-index__104'); }}/>
            </div>
            <Aside
                content={data[Language]}
            />
            <Navbar
                mobile={true}
            />
            <main className="main">
                <Portfolio
                    content={data[Language]}
                />
                <Footer
                    content={data[Language]}
                />
            </main>
            <Navbar
                page={'portfolio'}
                activeContent={data[Language].portfolio}
                content={data[Language]}
                HandleLanguage={LanguageHandle}
            />
        </main>
    );
}

export default PortfolioPage;
