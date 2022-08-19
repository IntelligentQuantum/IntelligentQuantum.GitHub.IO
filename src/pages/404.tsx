import Main from '../components/layouts/main/main.component';

import styles from '../styles/error.module.scss';

const ErrorPage = () =>
{
    return (
        <Main>
            <h1 className={styles.error}>404 Page Not Found</h1>
        </Main>
    );
};

export default ErrorPage;
