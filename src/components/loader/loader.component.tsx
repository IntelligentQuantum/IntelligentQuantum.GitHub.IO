import React from 'react';

import stylesLoading from '../../styles/components/loader.module.scss';

const LoaderComponent = () =>
    (
        <div className={stylesLoading.loader}>
            <span/>
            <span/>
            <span/>
        </div>
    );

export default LoaderComponent;
