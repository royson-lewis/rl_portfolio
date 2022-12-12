import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faFigma, faSass } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import styles from './main.module.scss'
import TechnologyTypes from "../../../../../../api/technology/types";

const SectionProjectInfoMain: React.FC<{
  role: string
  type: string
  duration: string
  technologyUsed: Array<TechnologyTypes>
}> = ({
    role,
    duration,
    technologyUsed,
    type
}) => (
  <section className={styles['project-info-section']}>
    <h3>Project Info</h3>
    <section className={styles['info-sections-container']}>
      <div className={styles['info-section']}>
        <h4>Project Type</h4>
        <h5>{type}</h5>
      </div>
      <div className={styles['info-section']}>
        <h4>My Role</h4>
        <h5>{role}</h5>
      </div>
      <div className={styles['info-section']}>
        <h4>Duration</h4>
        <h5>{duration}</h5>
      </div>
      <div className={styles['info-section']}>
        <h4>Technology Used</h4>
        <div className={styles['technology-container']}>
          {
            technologyUsed?.map(tech => {
              return (
                  <span><Image height={50} width={50} src={tech.logo} alt={tech.name} /></span>
              )
            })
          }
        </div>
      </div>
    </section>
  </section>
)

export default SectionProjectInfoMain
