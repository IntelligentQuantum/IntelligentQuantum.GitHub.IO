import React  from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SWIPER_CONFIG_2 } from '../../lib/constants';

import type { iOrgan } from '../../interfaces/organ';

import stylesHome from '../../styles/pages/home.module.scss';

const TooltipPrimary = dynamic(() => import('../tooltips/tooltip-primary.component'));

const OrgansList = (props: { dir?: 'rtl' | 'ltr', organs: iOrgan[] }) =>
{
    return (
        <div className={stylesHome.homeOrgans}>
            <Swiper
                dir={ props.dir ?? 'ltr' }
                { ...SWIPER_CONFIG_2 }
            >
                {
                    props.organs.map((organ: iOrgan) =>
                        (
                            <SwiperSlide key={ organ.node_id }>
                                <TooltipPrimary title={ organ.login }>
                                    <a href={`https://github.com/${ organ.login }`} target='_blank' className={stylesHome.homeOrgansContent} rel="noreferrer">
                                        <Image
                                            src={ organ.avatar_url }
                                            alt={ organ.login }
                                            width={120}
                                            height={120}
                                        />
                                    </a>
                                </TooltipPrimary>
                            </SwiperSlide>
                        ))
                }
            </Swiper>
        </div>
    );
};

export default OrgansList;
