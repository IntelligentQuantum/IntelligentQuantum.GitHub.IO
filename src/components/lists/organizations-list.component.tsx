import React  from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { v4 as uuidV4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SWIPER_CONFIG_2 } from '../../lib/constants';

import type { IOrganization } from '../../interfaces/organization';

import stylesHome from '../../styles/pages/home.module.scss';

const TooltipPrimary = dynamic(() => import('../tooltips/tooltip-primary.component'));

type Props =
    {
        dir?: 'rtl' | 'ltr',
        organizations: IOrganization[]
    };

const OrgansList = ({ dir, organizations }: Props) =>
{
    return (
        <div className={stylesHome.homeOrganization}>
            <Swiper
                dir={ dir ?? 'ltr' }
                { ...SWIPER_CONFIG_2 }
            >
                {
                    organizations.map((organization: IOrganization) =>
                        (
                            <SwiperSlide key={ uuidV4() }>
                                <TooltipPrimary content={ organization.login }>
                                    <a href={`https://github.com/${ organization.login }`} target='_blank' className={stylesHome.homeOrganizationContent} rel='noreferrer'>
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
