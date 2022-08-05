import React from 'react';
import dynamic from 'next/dynamic';

import type { IPlan } from '../../interfaces/plan';
import type { IContent } from '../../interfaces/content';

import stylesHome from '../../styles/pages/home.module.scss';

import Check from '../../public/static/icons/icon-check.svg';

const ButtonSecondary = dynamic(() => import('../buttons/secondary-button.component'));

const PlanCard = (props: { text: string, content: IContent, plan: IPlan }) =>
    (
        <div className={stylesHome.homePlansContent}>
            <h5>
                {props.plan.title}
            </h5>
            <div>
                {props.plan.price}
                <span>
                    {props?.content?.currency}
                </span>
            </div>
            <ul>
                <li>
                    <Check />
                    <span>
                        {props.plan.a}
                    </span>
                </li>
                <li>
                    <Check />
                    <span>
                        {props.plan.b}
                    </span>
                </li>
                <li>
                    <Check />
                    <span>
                        {props.plan.c}
                    </span>
                </li>
            </ul>
            <ButtonSecondary
                link='/contact'
                text={props.text}
            />
        </div>
    );

export default PlanCard;
