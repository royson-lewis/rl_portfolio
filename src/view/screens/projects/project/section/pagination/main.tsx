import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './main.module.scss'
import ButtonMain from '../../../../../../components/button/main'

const SectionPaginationMain = () => (
  <section className={styles['project-pagination']}>
    <ButtonMain className="no-border-w-icon">
      <FontAwesomeIcon icon={faArrowLeft} />
      Previous Project
    </ButtonMain>
    <ButtonMain className="no-border-w-icon">
      Next Project
      <FontAwesomeIcon icon={faArrowRight} />
    </ButtonMain>
  </section>
)

export default SectionPaginationMain
