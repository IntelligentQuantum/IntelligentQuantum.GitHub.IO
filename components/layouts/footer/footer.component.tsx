import stylesFooter from '../../../styles/components/footer.module.scss';

import Github from '../../../assets/icons/icon-github.svg';

const Footer = (props: any) =>
{
    return (
        <footer className={stylesFooter.footer}>
            <div className={stylesFooter.footerBox}>
                <div>© 2021 {props?.content?.my_name}</div>
                <a href='https://github.com/im-parsa/im-parsa.github.io' target='_blank'>
                    <Github />
                    {props?.content?.source_code}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
