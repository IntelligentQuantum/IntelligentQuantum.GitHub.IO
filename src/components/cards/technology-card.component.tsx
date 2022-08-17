import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const TooltipPrimary = dynamic(() => import('../tooltips/tooltip-primary.component'));

const TechnologyCard = (props: { index: number, technology: { title: string, icon: string }}) =>
    (
        <TooltipPrimary content={ props.technology.title }>
            <li>
                <span>
                    <Image
                        src={ props.technology.icon }
                        alt={ props.technology.title + ' Logo' }
                        layout='fill'
                    />
                </span>
            </li>
        </TooltipPrimary>
    );

export default TechnologyCard;
