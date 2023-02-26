import React from 'react';
import dynamic from 'next/dynamic';

import type { IService } from '../../interfaces/service';

import stylesHome from '../../styles/pages/home.module.scss';

const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

type Props =
    {
        text: string,
        service: IService
    };

const ServiceCard = ({ text, service }: Props) =>
    (
        <div className={stylesHome.homeServicesContent}>
            <h5>
                { service.title }
            </h5>
            <p>
                { service.description }
            </p>
            <ButtonSecondary
                link='/contact'
                text={text}
            />
        </div>
    );

export default ServiceCard;
