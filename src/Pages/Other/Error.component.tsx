import React, { useEffect, useState, useCallback } from 'react';
import data from '../../Assets/Data/data.json';
import Aside from "../../Component/UI/Aside.component";
import Navbar from "../../Component/UI/Navbar.component";
import Footer from "../../Component/UI/Footer.component";
import Error from "../../Component/UI/Error.component";

const ErrorPage = () =>
{
    const [Language, SetLanguage]: [Language: 'en' | 'gr' | 'pr', SetLanguage: any] = useState('en');
    const LanguageHandle = useCallback(
        () =>
        {
            SetLanguage(localStorage.getItem('language'))
        }, []);

    useEffect(() =>
    {
        LanguageHandle()
    }, [LanguageHandle]);

    return (
        <main className='container'>
            <div className="filter"/>
            <Aside
                content={data[Language]}
            />
            <Navbar
                mobile={true}
            />
            <main className="main">
                <Error
                    content={data[Language]}
                />
                <Footer
                    content={data[Language]}
                />
            </main>
            <Navbar
                page={'funny'}
                activeContent={data[Language].funny}
                content={data[Language]}
                HandleLanguage={LanguageHandle}
            />
        </main>
    );
}

export default ErrorPage;
