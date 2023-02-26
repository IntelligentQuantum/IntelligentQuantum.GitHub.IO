import React from 'react';

import type { IRepository } from '../../interfaces/repository';

import stylesHome from '../../styles/pages/home.module.scss';
import Star from '../../../public/static/icons/icon-github_star.svg';
import Fork from '../../../public/static/icons/icon-github_fork.svg';
import Watch from '../../../public/static/icons/icon-github_watch.svg';

type Props =
    {
        repository: IRepository
    };

const RepositoriesCard = ({ repository }: Props) =>
    (
        <div className={stylesHome.homeReposContent}>
            <div className={stylesHome.homeReposContentInfo}>
                <a href={repository?.html_url} target='_blank' rel="noreferrer">
                    { repository?.name }
                    <span>
                        { repository?.description }
                    </span>
                </a>
            </div>

            <ul className={stylesHome.homeReposContentStats}>
                <li>
                    <a href={`https://github.com/${ repository?.owner?.login }/${ repository?.name }/stargazers`}>
                        <Star />
                        { repository?.stargazers_count }
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${ repository?.owner?.login }/${ repository?.name }/watchers`}>
                        <Watch />
                        { repository?.watchers_count }
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${ repository?.owner?.login }/${ repository?.name }/network/members`}>
                        <Fork />
                        { repository?.forks_count }
                    </a>
                </li>
            </ul>
        </div>
    );

export default RepositoriesCard;
