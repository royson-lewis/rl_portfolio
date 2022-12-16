import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

import styles from './main.module.scss'
import LinkMain from '../../../../../../components/link/main'
import uris from '../../../../../../config/uri'

const SectionPaginationMain: React.FC<{
  prevProject: string
  nextProject: string
}> = ({ prevProject, nextProject }) => (
  <section className={styles['project-pagination']}>
    <LinkMain
      disabled={!prevProject}
      className={cn(styles['pagination-link'], { [styles.disabled]: !prevProject })}
      to={`${uris.projects}/${prevProject}`}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Previous Project
    </LinkMain>
    <LinkMain
      disabled={!nextProject}
      className={cn(styles['pagination-link'], { [styles.disabled]: !nextProject })}
      to={`${uris.projects}/${nextProject}`}
    >
      Next Project
      <FontAwesomeIcon icon={faArrowRight} />
    </LinkMain>
  </section>
)

export default SectionPaginationMain
