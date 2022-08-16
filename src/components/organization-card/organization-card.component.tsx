import Image from 'next/image';

import styles from './organization-card.module.scss';

const OrganizationCard = ({ login, avatarUrl }: any) =>
{
    return (
        <a
            className={styles.organization}
            href={`https://github.com/${ login }`}
            target='_blank'
            rel="noreferrer"
        >
            <span>
                <Image
                    src={avatarUrl}
                    alt={`IntelligentQuantum ${ login }`}
                    layout='intrinsic'
                    width={120}
                    height={120}
                />
            </span>
        </a>
    );
};

export default OrganizationCard;
