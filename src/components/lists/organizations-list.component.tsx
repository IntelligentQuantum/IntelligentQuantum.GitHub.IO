import React  from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SWIPER_CONFIG_2 } from '../../lib/constants';

import type { IOrganization } from '../../interfaces/organization';

import stylesHome from '../../styles/pages/home.module.scss';

const TooltipPrimary = dynamic(() => import('../tooltips/tooltip-primary.component'));

const OrgansList = (props: { dir?: 'rtl' | 'ltr', organizations: IOrganization[] }) =>
{
    return (
        <div className={stylesHome.homeOrganization}>
            <Swiper
                dir={ props.dir ?? 'ltr' }
                { ...SWIPER_CONFIG_2 }
            >
                {
                    props.organizations.map((organization: IOrganization) =>
                        (
                            <SwiperSlide key={ organization.node_id }>
                                <TooltipPrimary content={ organization.login }>
                                    <a href={`https://github.com/${ organization.login }`} target='_blank' className={stylesHome.homeOrganizationContent} rel="noreferrer">
                                        <Image
                                            src={ organization.avatar_url }
                                            alt={ organization.login }
                                            width={100}
                                            height={100}
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
