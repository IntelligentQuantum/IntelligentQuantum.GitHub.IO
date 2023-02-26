import Head from 'next/head';
import dynamic from 'next/dynamic';
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'next/router';
import React, { useState, Fragment } from 'react';

import type { ILanguages } from '../../types/language';
import type { IContent } from '../../interfaces/content';
import type { IProject } from '../../interfaces/project';

import styles from '../../styles/pages/projects.module.scss';

import data from '../../../public/static/data/data.json';

const ItemMotion = dynamic(() => import('../../components/animations/item.component'));
const ScrollMotion = dynamic(() => import('../../components/animations/scroll.component'));
const ProjectCard = dynamic(() => import('../../components/cards/project-card.component'));

const Projects = () =>
{
    const router = useRouter();

    const content = data[router.locale as ILanguages] as IContent;

    const [category, setCategory] = useState<string>('all');

    return (
        <Fragment>
            <Head>
                <title>Parsa Firoozi &mdash; Websites, Web3, Blockchain and Metaverse projects</title>

                <meta name='Classification' content='Projects'/>
                <meta name='subject' content='Projects'/>
                <meta name='description' content='Parsa Firoozi Websites, Web3, Blockchain and Metaverse projects'/>
                <meta name='keywords' content='im-parsa, Parsa Firoozi, Parsa, Firoozi, Portfolio, projects'/>
                <meta name='author' content='Parsa Firoozi'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://parsa-firoozi.ir/projects'/>
                <meta property='og:title' content='Parsa Firoozi'/>
                <meta property='og:description' content='Parsa Firoozi Websites, Web3, Blockchain and Metaverse projects'/>
                <meta property='og:image' content='https://parsa-firoozi.ir/static/images/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://parsa-firoozi.ir/projects'/>
                <meta property='twitter:title' content='Parsa Firoozi'/>
                <meta property='twitter:description' content='Parsa Firoozi Websites, Web3, Blockchain and Metaverse projects'/>
            </Head>

            <section className={styles.projects}>
                <h4 className='heading'>{ content.titles[6] }</h4>

                <ScrollMotion>
                    <ul className='heading__small'>
                        <ItemMotion index={ 0 } active={category === 'all'} onClick={() => setCategory('all')}>
                            { content.categories[0] }
                        </ItemMotion>
                        <ItemMotion index={ 1 } active={category === 'web_development'} onClick={() => setCategory('web_development')}>
                            { content.categories[1] }
                        </ItemMotion>
                        <ItemMotion index={ 2 } active={category === 'app_development'} onClick={() => setCategory('app_development')}>
                            { content.categories[2] }
                        </ItemMotion>
                        <ItemMotion index={ 3 } active={category === 'robot_development'} onClick={() => setCategory('robot_development')}>
                            { content.categories[3] }
                        </ItemMotion>
                        <ItemMotion index={ 4 } active={category === 'graphic_design'} onClick={() => setCategory('graphic_design')}>
                            { content.categories[4] }
                        </ItemMotion>
                    </ul>
                </ScrollMotion>

                <ScrollMotion delay={ .3 } className={styles.projectsList}>
                    {
                        content.my_projects.map((project: IProject) =>
                            (
                                category === 'all' || project.tag === category
                                    ?
                                    <ProjectCard
                                        key={ uuidV4() }
                                        project={ project }
                                        text={ content.read_more }
                                    />
                                    : null
                            ))
                    }
                </ScrollMotion>
            </section>
        </Fragment>
    );
};

export default Projects;
