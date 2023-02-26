import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { BsArrowsFullscreen } from 'react-icons/bs';

import styles from '../../styles/pages/projects.module.scss';

const ButtonSecondary = dynamic(() => import('../buttons/button-secondary.component'));

import { projectPopup } from '../../redux/features/layout/layout-slice';

type Props =
    {
        text: string,
        project:
            {
                image: string,
                title: string,
                tag: string,
                description: string,
                link: string
            }
    };

const ProjectCard = ({ text, project }: Props) =>
{
    const dispatch = useDispatch();

    return (
        <div className={styles.projectsItem}>
            <Image
                onClick={() => dispatch(projectPopup({ open: true, image: project.image, title: project.title }))}
                src={ project.image }
                alt={ project.title }
                layout='fill'
            />

            <i onClick={() => dispatch(projectPopup({ open: true, image: project.image, title: project.title }))}>
                <BsArrowsFullscreen size={17}/>
            </i>

            <div className={styles.projectsItemBox}>
                <h2>{ project.title }</h2>
                <p>{ project.description }</p>
                <ButtonSecondary
                    a={ true }
                    link={ project.link }
                    text={ text }
                />
            </div>
        </div>
    );
};

export default ProjectCard;
