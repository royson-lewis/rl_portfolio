import React, { useEffect, useMemo } from 'react'

import Image from 'next/image'

import styles from './main.module.scss'
import LinkMain from '../../../../../components/link/main'
import uris from '../../../../../config/uri'
import ProjectTypes, { CategoryProjectsTypes, GalleryTypes } from '../../../../../api/projects/types'
import { useInView, animated, useSpring, useSprings } from '@react-spring/web'

const SectionProjectsMain: React.FC<{
  categoryProjects: CategoryProjectsTypes[]
}> = ({ categoryProjects }) => {
  return (
    <section id="projects" className={styles['projects-section']}>
      {categoryProjects?.map((category) => {
        if (category.projects.length > 0) {
          return (
            <Category category={category} key={category.id} />
          )
        }
        return null
      })}
    </section>
  )
}

const Category: React.FC<{ category: CategoryProjectsTypes }> = ({ category }) => {
  const [ref, inView] = useInView({ rootMargin: '-30% 0% -50%' })

  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const [titleSprings, titleApi] = useSpring({
    ...titleFromState
  }, [titleFromState])

  useEffect(() => {
    if (inView) {
      titleApi.start({
        from: titleFromState,
        to: titleToState,
      })
    } else {
      titleApi.start({
        to: titleFromState,
      })
    }
  }, [inView])

  return (
    <div ref={ref} key={category.id} className={styles['project-category']}>
      <div className={styles['category-info']}>
        <animated.h2 style={titleSprings}>Projects</animated.h2>
        <animated.h3 style={titleSprings}>{category.name}</animated.h3>
        <animated.p style={titleSprings}>{category.description}</animated.p>
      </div>
      <div className={styles['category-gallery']}>
        {category.projects?.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </div>
  )
}

const Project: React.FC<{ project: ProjectTypes }> = ({ project }) => {
  const [ref, inView] = useInView({ rootMargin: '-20% 0% -50%' })

  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const [titleSprings, titleApi] = useSpring({
    ...titleFromState
  }, [titleFromState])

  useEffect(() => {
    if (inView) {
      titleApi.start({
        from: titleFromState,
        to: titleToState,
      })
    } else {
      titleApi.start({
        to: titleFromState,
      })
    }
  }, [inView])

  return (
    <div ref={ref} key={project.id} className={styles['category-project']}>
      <animated.div style={titleSprings} className={styles['project-images']}>
        {project.gallery?.map((gallery) => (
          <ProjectGallery key={gallery.id} gallery={gallery} slug={project.slug} />
        ))}
      </animated.div>
      <animated.h4 style={titleSprings}>{project.name}</animated.h4>
    </div>
  )
}

const ProjectGallery: React.FC<{ gallery: GalleryTypes; slug: string }> = ({ slug, gallery }) => {
  const [ref, inView] = useInView({ rootMargin: '-20% 0% -50%' })

  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const [titleSprings, titleApi] = useSpring({
    ...titleFromState
  }, [titleFromState])

  useEffect(() => {
    if (inView) {
      titleApi.start({
        from: titleFromState,
        to: titleToState,
      })
    } else {
      titleApi.start({
        to: titleFromState,
      })
    }
  }, [inView])

  const AnimatedImage = animated(Image)
  return (
    <div ref={ref} className={styles['project-image-wrapper']}>
      <LinkMain to={`${uris.projects}/${slug}`}>
        <AnimatedImage style={titleSprings} width="400" height="600" src={gallery.imgLink} alt={gallery.alt} />
      </LinkMain>
    </div>
  )
}

export default SectionProjectsMain
