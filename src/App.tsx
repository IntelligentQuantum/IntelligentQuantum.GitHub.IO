import React, { useEffect } from 'react';
import { Switch ,Route } from "react-router-dom";
import { HandleLanguage, HandleTheme } from "./Utils/Utils.service";
import Home from './Pages/Home/Home.component';
import Blog from './Pages/Blog/Blog.component';
import Funny from './Pages/Funny/Funny.component';
import Error from './Pages/Other/Error.component';
import BlogView from './Pages/Blog/View.component';
import Contact from './Pages/Contact/Contact.component';
import Portfolio from './Pages/Portfolio/Portfolio.component';

const App = () =>
{
    useEffect(() =>
    {
        console.log('%cim-parsa', 'color: #4f40f8; padding:7px; border-radius:5px; background: #191923; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: 0 0 8px #4f40f8;');
        HandleTheme(localStorage.getItem('theme') || 'light', false)
        HandleLanguage(localStorage.getItem('language') || 'en')
    }, []);

    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/portfolio" component={ Portfolio } />
            <Route exact path="/funny" component={ Funny } />
            <Route exact path="/blogs/:name" component={ BlogView } />
            <Route exact path="/blogs" component={ Blog } />

            <Route path="*" component={ Error } />
        </Switch>
    );
}

export default App;
