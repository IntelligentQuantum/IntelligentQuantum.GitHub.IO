import React from 'react';
import dynamic from 'next/dynamic';

import type { IService } from '../../interfaces/service';

import stylesHome from '../../styles/pages/home.module.scss';

const ItemMotion = dynamic(() => import('../animations/item.component'));
const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

const ServiceCard = (props: { text: string, index: number, service: IService }) =>
    (
        <ItemMotion index={ props.index } className={stylesHome.homeServicesContent}>
            <h3>
                { props.service.title }
            </h3>
            <p>
                { props.service.description }
            </p>
            <ButtonSecondary
                link='/contact'
                text={props.text}
            />
        </ItemMotion>
    );

export default ServiceCard;
