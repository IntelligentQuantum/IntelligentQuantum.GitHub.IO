import React from 'react';

import type { IRepository } from '../../interfaces/repository';

import stylesHome from '../../styles/pages/home.module.scss';

import { BiStar } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';

const RepositoriesCard = (props: { repository: IRepository }) =>
    (
        <div className={stylesHome.homeRepositoriesContent}>
            <div className={stylesHome.homeRepositoriesContentInfo}>
                <a href={props?.repository?.html_url} target='_blank' rel="noreferrer">
                    { props?.repository?.name }
                </a>
                <span>{ props?.repository?.description }</span>
            </div>

            <ul className={stylesHome.homeRepositoriesContentStats}>
                <li>
                    <a href={`https://github.com/${ props?.repository?.owner?.login }/${ props?.repository?.name }/stargazers`}>
                        <BiStar />
                        { props?.repository?.stargazers_count }
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${ props?.repository?.owner?.login }/${ props?.repository?.name }/watchers`}>
                        <AiOutlineEye />
                        { props?.repository?.watchers_count }
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${ props?.repository?.owner?.login }/${ props?.repository?.name }/network/members`}>
                        <GoRepoForked />
                        { props?.repository?.forks_count }
                    </a>
                </li>
            </ul>
        </div>
    );

export default RepositoriesCard;
