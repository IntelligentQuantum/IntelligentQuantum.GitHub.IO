import Link from 'next/link';

import { BiChevronRight } from 'react-icons/bi';

import styles from './service-card.module.scss';

interface ServiceCardProps
{
    title: string,
    description: string
}

const ServiceCard = ({ title, description }: ServiceCardProps) =>
{
    return (
        <div className={styles.serviceCard}>
            <h5 className={styles.serviceCardHeading}>{title}</h5>
            <p className={styles.serviceCardParagraph}>
                {description}
            </p>
            <Link href='/'>
                <a className={styles.serviceCardButton}>
                    ORDER NOW
                    <BiChevronRight />
                </a>
            </Link>
        </div>
    );
};

export default ServiceCard;
