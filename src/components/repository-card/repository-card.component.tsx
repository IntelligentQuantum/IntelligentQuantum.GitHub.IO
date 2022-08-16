import styles from './repository-card.module.scss';

import { BiStar } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';

const RepositoryCard = ({ name, description, stars, watchers, forks }: any) =>
{
    return (
        <div className={styles.repository}>
            <div className={styles.repositoryInfo}>
                <a href='/src/pages' target='_blank' rel="noreferrer">
                    <span>{name}</span>
                    <p>{description}</p>
                </a>
            </div>

            <ul className={styles.repositoryStats}>
                <li className={styles.repositoryStatsItem}>
                    <a href="src/components/repository-card/repository-card.component">
                        <BiStar />
                        <span>{stars}</span>
                    </a>
                </li>
                <li className={styles.repositoryStatsItem}>
                    <a href="src/components/repository-card/repository-card.component">
                        <AiOutlineEye />
                        <span>{watchers}</span>
                    </a>
                </li>
                <li className={styles.repositoryStatsItem}>
                    <a href="src/components/repository-card/repository-card.component">
                        <GoRepoForked />
                        <span>{forks}</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default RepositoryCard;
