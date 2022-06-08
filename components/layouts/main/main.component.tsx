import Footer from '../footer/footer.component';

import stylesMain from '../../../stylesheets/components/main.module.scss';

const Main = (props: any) =>
{
    return (
        <main className={stylesMain.main}>
            { props.children }
            <Footer content={props?.content} />
        </main>
    );
};

export default Main;
