import React from "react";

const Footer = (props: any) =>
{
    return (
        <footer className="footer">
            <div className="footer__box">
                <div className="art-copy">© 2021 {props.content.myName}</div>
                <a href="https://github.com/im-parsa/im-parsa.github.io" rel="noreferrer" target="_blank">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <use xlinkHref="/svg/sprite.svg#icon-github"/>
                    </svg>
                    {props.content.sourceCode}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
