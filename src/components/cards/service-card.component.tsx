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
            <h3>
                { service.title }
            </h3>
            <h5>
                { service.description }
            </h5>
            <ButtonSecondary
                link='/contact'
                text={ text }
            />
        </div>
    );

export default ServiceCard;
