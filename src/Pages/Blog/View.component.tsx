import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import Data from '../../Assets/Data/data.json';
import Aside from "../../Component/UI/Aside.component";
import Navbar from "../../Component/UI/Navbar.component";
import Footer from "../../Component/UI/Footer.component";
import BlogView from "../../Component/Layout/Blog/View.component";
import { FindBlog } from "../../Utils/Utils.service";

const BlogPage = () =>
{
    const [Language, SetLanguage]: [Language: 'en' | 'gr' | 'pr', SetLanguage: any] = useState('en');
    const { name }: any = useParams();
    const [Blog, SetBlog]: any = useState(["loading"]);
    const LanguageHandle = useCallback(
        () =>
        {
            SetLanguage(localStorage.getItem('language'))
        }, [SetLanguage]);

    useEffect(() =>
    {
        LanguageHandle()

        // @ts-ignore
        let blog = FindBlog(Data[Language].myBlogs, name);
        if (blog)
        {
            SetBlog([blog])
        }
    }, [LanguageHandle, SetBlog, Language, name]);

    return (
        <main className='container'>
            <div className="filter"/>
            <Aside
                content={Data[Language]}
            />
            <Navbar
                mobile={true}
            />
            <main className="main">
                <BlogView
                    content={Data[Language]}
                    blog={Blog[0]}
                />
                <Footer
                    content={Data[Language]}
                />
            </main>
            <Navbar
                page={'blogs'}
                activeContent={Data[Language].blogs}
                content={Data[Language]}
                HandleLanguage={LanguageHandle}
            />
        </main>
    );
}

export default BlogPage;
