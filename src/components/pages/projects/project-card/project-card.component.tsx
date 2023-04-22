import Image from 'next/image';

import { BiChevronRight } from 'react-icons/bi';

import styles from './project-card.module.scss';

interface ProjectCardProps
{
    image: string;
    alt: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = (props: ProjectCardProps) =>
{
    return (
        <div className={styles.projectCard}>
            <Image
                src={props.image}
                alt={props.title}
                className={styles.projectCardImage}
                width={'400'}
                height={'400'}
            />

            <div className={styles.projectCardContent}>
                <h2 className={styles.projectCardContentHeading}>
                    {props.title}
                </h2>
                <p className={styles.projectCardContentParagraph}>
                    {props.description}
                </p>
                <a
                    className={styles.projectCardContentButton}
                    href={props.link}
                    target='_blank'
                    rel='noreferrer'
                >
                    Read More
                    <BiChevronRight />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
