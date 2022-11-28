import React from 'react'

import styles from './main.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faFigma, faSass} from "@fortawesome/free-brands-svg-icons";

const SectionProjectInfoMain = () => (
  <section className={styles['project-info-section']}>
    <h3>Project Info</h3>
    <section className={styles['info-sections-container']}>
      <div className={styles['info-section']}>
        <h4>Project Type</h4>
        <h5>Concept Project</h5>
      </div>
      <div className={styles['info-section']}>
        <h4>My Role</h4>
        <h5>Branding, Web Design, Development, Database Management</h5>
      </div>
      <div className={styles['info-section']}>
        <h4>Duration</h4>
        <h5>2 months</h5>
      </div>
      <div className={styles['info-section']}>
        <h4>Technology Used</h4>
        <div className={styles['technology-container']}>
          <span><FontAwesomeIcon icon={faReact} /></span>
          <span><FontAwesomeIcon icon={faFigma} /></span>
          <span><FontAwesomeIcon icon={faSass} /></span>
        </div>
      </div>
    </section>
  </section>
)

export default SectionProjectInfoMain
