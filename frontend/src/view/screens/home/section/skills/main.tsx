import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

import styles from './main.module.scss'
import TechnologyTypes from '../../../../../api/technology/types'

const SectionSkillsMain: React.FC<{
  skills: TechnologyTypes[]
}> = ({ skills }) => (
  <section className={styles['skills-section']}>
    <div className={styles['skills-header']}>
      <h2>Skills</h2>
      <h3>Languages & Technologies</h3>
      <p>
        Aliquam vitae in molestie elit faucibus nulla. Et nisl fames adipiscing placerat aliquet
        pulvinar tellus dictum sagittis. Mattis orci, et egestas purus quisque.
      </p>
    </div>
    <div className={styles['skills-container']}>
      {skills
        .sort((a, b) => a.rank - b.rank)
        .map((skill) => (
          <div
            key={skill.id}
            className={cn(styles['skill-pill'], { [styles.featured]: skill.featured })}
          >
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>{skill.name}</p>
          </div>
        ))}
    </div>
  </section>
)

export default SectionSkillsMain
