import styles from './repository-card.module.scss';

import { BiStar } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';

interface RepositoryCardProps
{
    name: string;
    description: string;
    stars: number;
    watchers: number;
    forks: number;
    repoLink: string;
    starLink: string;
    watchLink: string;
    forkLink: string;
}

const RepositoryCard = (props: RepositoryCardProps) =>
{
    return (
        <div className={styles.repository}>
            <div className={styles.repositoryInfo}>
                <a href={props.repoLink} target='_blank' rel="noreferrer">
                    <span>{props.name}</span>
                    <p>{props.description}</p>
                </a>
            </div>

            <ul className={styles.repositoryStats}>
                <li className={styles.repositoryStatsItem}>
                    <a href={props.starLink}>
                        <BiStar />
                        <span>{props.stars}</span>
                    </a>
                </li>
                <li className={styles.repositoryStatsItem}>
                    <a href={props.watchLink}>
                        <AiOutlineEye />
                        <span>{props.watchers}</span>
                    </a>
                </li>
                <li className={styles.repositoryStatsItem}>
                    <a href={props.forkLink}>
                        <GoRepoForked />
                        <span>{props.forks}</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default RepositoryCard;
