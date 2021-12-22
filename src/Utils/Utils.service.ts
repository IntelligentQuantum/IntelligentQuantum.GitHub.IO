import { ShowAlert } from "../Component/Modules/Alerts.module";

export const FindBlog = (Obj: [{ name: string }], Needle: string) =>
{
    for (let i = 0; i < Obj.length; i++)
    {
        if (Obj[i].name === Needle)
        {
            return Obj[i]
        }
    }
    return false
}

export const GetParameterByName = (name: string, url: string = window.location.href) =>
{
    name = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const HandleTheme = (theme: string | any, dynamic: boolean) =>
{
    let htmlElement: HTMLElement | any = document.querySelector(`html`),
        themeDimBox: HTMLElement | any = document.querySelector(`#themeDimBox`),
        themeDarkBox: HTMLElement | any = document.querySelector(`#themeDarkBox`),
        themeLightBox: HTMLElement | any = document.querySelector(`#themeLightBox`);

    if (theme === 'dark')
    {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("data-theme", "dark");

        if (dynamic)
        {
            themeDarkBox.classList.add('themeBoxActive');
            themeLightBox.classList.remove('themeBoxActive');
            themeDimBox.classList.remove('themeBoxActive');
        }
    }
    else if (theme === 'light')
    {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("data-theme", "light");

        if (dynamic)
        {
            themeLightBox.classList.add('themeBoxActive');
            themeDarkBox.classList.remove('themeBoxActive');
            themeDimBox.classList.remove('themeBoxActive');
        }
    }
    else if (theme === 'dim')
    {
        localStorage.setItem("theme", "dim");
        htmlElement.setAttribute("data-theme", "dim");

        if (dynamic)
        {
            themeDimBox.classList.add('themeBoxActive');
            themeDarkBox.classList.remove('themeBoxActive');
            themeLightBox.classList.remove('themeBoxActive');
        }
    }
};

export class TypeWriter
{
    private textElement: any;
    private readonly words: any;
    private text: any;
    private wordIndex: any;
    private readonly wait: any;
    private isDeleting: any;

    constructor(textElement: HTMLElement | any, words: string, wait: number = 3000)
    {
        this.textElement = textElement;
        this.words = words;
        this.text = '';
        this.wordIndex = 0;
        this.wait = parseInt(String(wait), 10);
        this.type();
        this.isDeleting = false;
    }

    type()
    {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting)
        {
            this.text = fullTxt.substring(0, this.text.length - 1);
        }
        else
        {
            this.text = fullTxt.substring(0, this.text.length + 1);
        }

        this.textElement.innerHTML = `<span class='build__cursor'>${this.text}<i class="bi-cursor-text"></i></span>`;

        let typeSpeed = 150;

        if (this.isDeleting)
            typeSpeed /= 3;

        if (!this.isDeleting && this.text === fullTxt)
        {
            typeSpeed = this.wait;
            this.isDeleting = true;
            typeSpeed = 500;
        }
        else if (this.isDeleting && this.text === '')
        {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

export const HandleLanguage = (language: string) =>
{
    let htmlElement: HTMLElement | any = document.querySelector(`html`),
        EnLang: HTMLElement | any = document.querySelector(`#en-lang`),
        GrLang: HTMLElement | any = document.querySelector(`#gr-lang`),
        PrLang: HTMLElement | any = document.querySelector(`#pr-lang`);

    if (language === 'en')
    {
        localStorage.setItem("language", "en");
        htmlElement.setAttribute("data-language", "en");
        htmlElement.setAttribute("dir", "ltr");

        EnLang.classList.add('nav__languages--active');
        PrLang.classList.remove('nav__languages--active');
        GrLang.classList.remove('nav__languages--active');
    }
    else if (language === 'gr')
    {
        localStorage.setItem("language", "gr");
        htmlElement.setAttribute("data-language", "gr");
        htmlElement.setAttribute("dir", "ltr");

        EnLang.classList.remove('nav__languages--active');
        PrLang.classList.remove('nav__languages--active');
        GrLang.classList.add('nav__languages--active');
    }
    else if (language === 'pr')
    {
        localStorage.setItem("language", "pr");
        htmlElement.setAttribute("data-language", "pr");
        htmlElement.setAttribute("dir", "rtl");

        EnLang.classList.remove('nav__languages--active');
        PrLang.classList.add('nav__languages--active');
        GrLang.classList.remove('nav__languages--active');
    }
};

export const AsideToggle = () =>
{
    const filter: HTMLElement | any = document.querySelector('.filter');
    const aside: HTMLElement | any = document.querySelector('.aside');

    filter.classList.toggle('active');
    aside.classList.toggle('open');
}

export const NavbarToggle = () =>
{
    const nav: HTMLElement | any = document.querySelector('.nav');
    const filter: HTMLElement | any = document.querySelector('.filter');
    const container: HTMLElement | any = document.querySelector('.container');

    filter.classList.toggle('active');
    container.classList.toggle('navbar-open');
    nav.classList.toggle('open');
}

export const RemoveClass = (Element: string, Class: string) =>
{
    try
    {
        const ElementV: HTMLElement | any = document.querySelectorAll(Element);
        if (ElementV) ElementV.forEach((el: HTMLElement) =>
        {
            el.classList.remove(Class);
        })
    }
    catch (err: any)
    {
        ShowAlert("danger", err.message);
    }
};

export const AddClass = (Element: string, Class: string) =>
{
    try
    {
        const ElementV: HTMLElement | any = document.querySelectorAll(Element);
        if (ElementV) ElementV.forEach((el: HTMLElement) =>
        {
            el.classList.add(Class);
        })
    }
    catch (err: any)
    {
        ShowAlert("danger", err.message);
    }
};

export const EditImg = (Element: string, Src: string, Alt: string) =>
{
    try
    {
        const ElementV: HTMLElement | any = document.querySelector(Element);
        if (ElementV) ElementV.src = Src; ElementV.alt = Alt;
    }
    catch (err: any)
    {
        ShowAlert("danger", err.message);
    }
};
