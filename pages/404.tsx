import type { IContent } from '../contracts/IContent';

import 'moment/locale/de';
import 'moment/locale/fa';
import 'moment/locale/en-gb';

import Error from '../components/error/error.component';

import stylesMain from '../../stylesheets/components/main.module.scss';

const ErrorPage: (props: { content: IContent }) => JSX.Element = (props: { content: IContent }) =>
{
    return (
        <div className={stylesMain.mainContent}>
            <div className={stylesMain.mainBackground}/>
            <Error
                title='404'
                description={props?.content?.blog_not_found}
                content={props?.content}
            />
            <div className='hr'/>
        </div>
    )
}

export default ErrorPage;
