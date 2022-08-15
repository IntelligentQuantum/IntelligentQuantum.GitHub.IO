import React from 'react';
import dynamic from 'next/dynamic';

import type { IRepository } from '../../interfaces/repository';

import stylesHome from '../../styles/pages/home.module.scss';
import Star from '../../../public/static/icons/icon-github_star.svg';
import Fork from '../../../public/static/icons/icon-github_fork.svg';
import Watch from '../../../public/static/icons/icon-github_watch.svg';

const RepositoriesCard = (props: { repository: IRepository }) =>
    (
        <div className={stylesHome.homeRepositoriesContent}>
            <div className={stylesHome.homeRepositoriesContentInfo}>
                <a href={props?.repository?.html_url} target='_blank' rel="noreferrer">
                    { props?.repository?.name }
                    <span>
                        { props?.repository?.description }
                    </span>
                </a>
            </div>

            <ul className={stylesHome.homeRepositoriesContentStats}>
                <li>
                    <a href={`https://github.com/${ props?.repository?.owner?.login }/${ props?.repository?.name }/stargazers`}>
                        <Star />
                        { props?.repository?.stargazers_count }
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${ props?.repository?.owner?.login }/${ props?.repository?.name }/watchers`}>
                        <Watch />
                        { props?.repository?.watchers_count }
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${ props?.repository?.owner?.login }/${ props?.repository?.name }/network/members`}>
                        <Fork />
                        { props?.repository?.forks_count }
                    </a>
                </li>
            </ul>
        </div>
    );

export default RepositoriesCard;
