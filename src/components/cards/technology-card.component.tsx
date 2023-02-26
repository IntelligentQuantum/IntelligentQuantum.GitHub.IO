import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const TooltipPrimary = dynamic(() => import('../tooltips/tooltip-primary.component'));

type Props =
    {
        technology:
            {
                title: string,
                icon: string
            }
    };

const TechnologyCard = ({ technology }: Props) =>
    (
        <TooltipPrimary content={ technology.title } data-light={ true }>
            <li>
                <span>
                    <Image
                        src={ technology.icon }
                        alt={ technology.title + ' Logo' }
                        layout='fill'
                    />
                </span>
            </li>
        </TooltipPrimary>
    );

export default TechnologyCard;
