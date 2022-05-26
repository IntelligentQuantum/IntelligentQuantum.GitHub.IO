import Footer from '../footer/footer.component';

const Main = (props: any) =>
{
    return (
        <main className='main'>
            { props.children }
            <Footer content={props?.content} />
        </main>
    );
};

export default Main;
