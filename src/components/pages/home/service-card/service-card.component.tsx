import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { BiChevronRight } from 'react-icons/bi';

import styles from './service-card.module.scss';

interface ServiceCardProps
{
    title: string,
    description: string
}

const ServiceCard = ({ title, description }: ServiceCardProps) =>
{
    const { t } = useTranslation();

    return (
        <div className={styles.serviceCard}>
            <h5 className={styles.serviceCardHeading}>{title}</h5>
            <p className={styles.serviceCardParagraph}>
                {description}
            </p>
            <Link href='/contact' className={styles.serviceCardButton}>
                {t('common:order')}
                <BiChevronRight />
            </Link>
        </div>
    );
};

export default ServiceCard;
