import React from 'react';
import dynamic from 'next/dynamic';

import type { IService } from '../../interfaces/service';

import stylesHome from '../../styles/pages/home.module.scss';

const ButtonSecondary = dynamic(() => import('../button/button-secondary.component'));

const ServiceCard = (props: { text: string, service: IService }) =>
    (
        <div className={stylesHome.homeServicesContent}>
            <h5>
                { props.service.title }
            </h5>
            <p>
                { props.service.description }
            </p>
            <ButtonSecondary
                link='/contact'
                text={props.text}
            />
        </div>
    );

export default ServiceCard;
