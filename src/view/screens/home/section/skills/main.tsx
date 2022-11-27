import React from "react";
import styles from './main.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";

const SectionSkillsMain = () => {
  return (
    <section className={styles["skills-section"]}>
      <div className={styles['skills-header']}>
        <h2>Skills</h2>
        <h3>Languages & Technologies</h3>
        <p>Aliquam vitae in molestie elit faucibus nulla. Et nisl fames adipiscing placerat aliquet pulvinar tellus dictum sagittis. Mattis orci, et egestas purus quisque.</p>
      </div>
      <div className={styles['skills-container']}>
        <div className={cn(styles['skills-row'], styles['one'])}>
          <div className={cn(styles['skill-pill'])}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Typescript</p>
          </div>
          <div className={cn(styles['skill-pill'], styles['special-pill'])}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>React</p>
          </div>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>CSS</p>
          </div>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>HTML</p>
          </div>
        </div>
        <div className={cn(styles['skills-row'], styles['two'])}>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Node.js</p>
          </div>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>SQL/NoSQL</p>
          </div>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Figma</p>
          </div>
          <div className={cn(styles['skill-pill'], styles['special-pill'])}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Docker</p>
          </div>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Nest.js</p>
          </div>
        </div>
        <div className={cn(styles['skills-row'], styles['three'])}>
          <div className={cn(styles['skill-pill'], styles['special-pill'])}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Next.js</p>
          </div>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>HTML</p>
          </div>
          <div className={cn(styles['skill-pill'], styles['special-pill'])}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>AWS</p>
          </div>
          <div className={styles['skill-pill']}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Electron</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSkillsMain
