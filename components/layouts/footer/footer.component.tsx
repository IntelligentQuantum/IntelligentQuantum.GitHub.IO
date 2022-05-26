const Footer = (props: any) =>
{
    return (
        <footer className='footer'>
            <div className='footer__box'>
                <div className='art-copy'>© 2021 {props?.content?.my_name}</div>
                <a href='https://github.com/im-parsa/im-parsa.github.io' rel='noreferrer' target='_blank'>
                    <svg width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                        <use xlinkHref='/svg/sprite.svg#icon-github'/>
                    </svg>
                    {props?.content?.source_code}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
