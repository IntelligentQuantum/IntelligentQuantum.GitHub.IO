import React from 'react';
import { Rating } from 'react-simple-star-rating';

import type { Recommendation } from '../../interfaces/recommendation';

import stylesHome from '../../styles/pages/home.module.scss';

const RecommendationCard = (props: { recommendation: Recommendation, language: string }) =>
    (
        <div className={stylesHome.homeRecommendationsContent}>
            <div>
                <h5>
                    { props?.recommendation?.author?.name }
                    <span>
                        { props?.recommendation?.author?.description }
                    </span>
                </h5>

                <img src={ props?.recommendation?.author?.profile } alt={ props?.recommendation?.author?.name }/>
            </div>

            <p>
                { props?.recommendation?.message }
            </p>

            <span>
                <Rating
                    rtl={props?.language === 'fa'}
                    readonly={true}
                    size={15}
                    ratingValue={props?.recommendation?.rate}
                />
            </span>
        </div>
    );

export default RecommendationCard;
