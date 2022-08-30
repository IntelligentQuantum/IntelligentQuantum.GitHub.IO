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
            <span className={styles.hobbyCardImage}>
                <Image
                    src={props.src}
                    alt={props.title}
                    layout='intrinsic'
                    width={props.width}
                    height={props.height}
                />
            </span>
        </div>
    );
};

export default HobbyCard;
