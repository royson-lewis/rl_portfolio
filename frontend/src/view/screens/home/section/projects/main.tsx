import React from 'react'

import Image from 'next/image'

import styles from './main.module.scss'
import LinkMain from "../../../../../components/link/main";
import uris from "../../../../../config/uri";
import {CategoryProjectsTypes} from "../../../../../api/projects/types";

const SectionProjectsMain: React.FC<{
  categoryProjects: CategoryProjectsTypes[]
}> = ({
        categoryProjects
}) => (
    <section className={styles['projects-section']}>
      {categoryProjects?.map((category) => {
        if (category?.projects.length > 0) {
            return (
                <div key={category.id} className={styles['project-category']}>
                    <div key={category?.id} className={styles['category-info']}>
                        <h2>Projects</h2>
                        <h3>{category.name}</h3>
                        <p>
                            Aliquam vitae in molestie elit faucibus nulla. Et nisl fames adipiscing placerat aliquet
                            pulvinar tellus dictum sagittis. Mattis orci, et egestas purus quisque.
                        </p>
                    </div>
                    <div className={styles['category-gallery']}>
                        {category?.projects?.map((project) => {
                            return (
                                <div key={project.id} className={styles['category-project']}>
                                    <div className={styles['project-images']}>
                                        <div className={styles['project-image-wrapper']}>
                                            <LinkMain to={uris.projects}>
                                                <Image
                                                    width="400"
                                                    height="600"
                                                    src="https://cdn.dribbble.com/userupload/2904447/file/original-848325509e0ad2b48f43dc5a8ca727c7.png?compress=1&resize=640x480"
                                                    alt="project thumbnail"
                                                />
                                            </LinkMain>
                                        </div>
                                        <div className={styles['project-image-wrapper']}>
                                            <LinkMain to={uris.projects}>
                                                <Image
                                                    width="400"
                                                    height="600"
                                                    src="https://cdn.dribbble.com/users/1544818/screenshots/17077305/media/fe24e9e9b8ff058af40afdfe1a4950d9.png?compress=1&resize=700x525&vertical=top"
                                                    alt="project thumbnail"
                                                />
                                            </LinkMain>
                                        </div>
                                    </div>
                                    <h4>{project.name}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
      })}
    </section>
)

export default SectionProjectsMain
