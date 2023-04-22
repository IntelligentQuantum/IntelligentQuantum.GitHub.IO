import Image from 'next/image';

import styles from './hobby-card.module.scss';

interface HobbyProps
{
    src: string;
    title: string;
    description: string;
    width: number;
    height: number;
}

const HobbyCard = (props: HobbyProps) =>
{
    return (
        <div className={styles.hobbyCard} data-bg={props.title}>
            <div className={styles.hobbyCardContent}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <Image
                src={props.src}
                alt={props.title}
                className={styles.hobbyCardImage}
                width={props.width}
                height={props.height}
            />
        </div>
    );
};

export default HobbyCard;
