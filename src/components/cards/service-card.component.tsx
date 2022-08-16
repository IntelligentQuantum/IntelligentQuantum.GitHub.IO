import React from 'react';
import dynamic from 'next/dynamic';

import type { IService } from '../../interfaces/service';

import stylesHome from '../../styles/pages/home.module.scss';

const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

const ServiceCard = (props: { text: string, service: IService }) =>
    (
        <div className={stylesHome.homeServicesContent}>
            <h3>
                { props.service.title }
            </h3>
            <h5>
                { props.service.description }
            </h5>
            <ButtonSecondary
                link='/contact'
                text={props.text}
            />
        </div>
    );

export default ServiceCard;
