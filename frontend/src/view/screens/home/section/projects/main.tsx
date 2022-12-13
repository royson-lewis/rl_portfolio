import React from 'react'

import Image from 'next/image'

import styles from './main.module.scss'
import LinkMain from "../../../../../components/link/main";
import uris from "../../../../../config/uri";
import {CategoryProjectsTypes, GalleryTypes} from "../../../../../api/projects/types";

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
                            <p>{category.description}</p>
                        </div>
                        <div className={styles['category-gallery']}>
                            {category?.projects?.map((project) => {
                                return (
                                    <div key={project.id} className={styles['category-project']}>
                                        <div className={styles['project-images']}>
                                            {project.gallery?.map((gallery) => (
                                                <ProjectGallery key={gallery.id} gallery={gallery} slug={project.slug} />
                                            ))}
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

const ProjectGallery: React.FC<{gallery: GalleryTypes, slug: string}> =
    ({
         slug,
         gallery
     }) => {
        return (
            <div className={styles['project-image-wrapper']}>
                <LinkMain to={`${uris.projects}/${slug}`}>
                    <Image
                        width="400"
                        height="600"
                        src={gallery.imgLink}
                        alt={gallery.alt}
                    />
                </LinkMain>
            </div>
        )
    }

export default SectionProjectsMain
