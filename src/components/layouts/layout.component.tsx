import { Fragment, ReactNode } from 'react';

import Aside from './aside/aside.component';
import Main from './main/main.component';
import Nav from './nav/nav.component';

interface LayoutProps
{
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) =>
{
    return (
        <Fragment>
            <Aside />
            <Main>
                { children }
            </Main>
            <Nav />
        </Fragment>
    );
};

export default Layout;
