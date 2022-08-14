import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import { SWIPER_CONFIG_1 } from '../../lib/constants';

import type { IRepository } from '../../interfaces/repository';

import stylesHome from '../../styles/pages/home.module.scss';
const RepositoriesCard = dynamic(() => import('../cards/repository-card.component'));

const RepositoriesList = (props: { dir?: 'rtl' | 'ltr', repositories: IRepository[] }) =>
{
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={stylesHome.homeRepositories}>
            <Swiper
                dir={ props.dir ?? 'ltr' }
                navigation={{
                    prevEl: nextRef.current,
                    nextEl: prevRef.current,
                }}
                { ...SWIPER_CONFIG_1 }
            >
                {
                    props.repositories.map((repository: IRepository) =>
                        (
                            <SwiperSlide key={ repository.node_id }>
                                <RepositoriesCard
                                    repository={ repository }
                                />
                            </SwiperSlide>
                        ))
                }

                <div className={stylesHome.homeRepositoriesPrevNext}>
                    <div ref={nextRef}>
                        <BiChevronLeft />
                    </div>
                    <div ref={prevRef}>
                        <BiChevronRight />
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default RepositoriesList;
