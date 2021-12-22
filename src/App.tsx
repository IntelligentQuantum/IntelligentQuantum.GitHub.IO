import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { HandleLanguage, HandleTheme, GetParameterByName } from "./Utils/Utils.service";

import Home from './Pages/Home/Home.component';
import Blog from './Pages/Blog/Blog.component';
import Funny from './Pages/Funny/Funny.component';
import Error from './Pages/Other/Error.component';
import BlogView from './Pages/Blog/View.component';
import Contact from './Pages/Contact/Contact.component';
import Portfolio from './Pages/Portfolio/Portfolio.component';

const App = () =>
{
    let LanguageParam: string | null = GetParameterByName('language');

    useEffect(() =>
    {
        console.log('%cim-parsa', 'color: #4f40f8; padding:7px; border-radius:5px; background: #191923; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: 0 0 8px #4f40f8;');

        switch (LanguageParam)
        {
            case 'en':
                localStorage.setItem("language", "en");
                break;
            case 'gr':
                localStorage.setItem("language", "gr");
                break;
            case 'pr':
                localStorage.setItem("language", "pr");
                break;
            default:
                localStorage.setItem("language", "en");
        }

        HandleTheme(localStorage.getItem('theme') || 'light', false)
        HandleLanguage(localStorage.getItem('language') || 'en')
    }, [LanguageParam]);

    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="contact" element={ <Contact /> } />
            <Route path="portfolio" element={ <Portfolio /> } />
            <Route path="funny" element={ <Funny /> } />
            <Route path="blogs/:name" element={ <BlogView /> } />
            <Route path="blogs" element={ <Blog /> } />

            <Route path="*" element={ <Error /> } />
        </Routes>
    );
}

export default App;
