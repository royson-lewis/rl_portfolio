import styles from '../main.module.scss'
import BackendSkillImage from '../assets/backend-skill.svg'
import FrontendSkillImage from '../assets/frontend-skill.svg'
import UISkillImage from '../assets/ui-skill.svg'
import OtherSkillImage from '../assets/other-skill.svg'

const SkillSection = () => {
  const uiSkillArray = ['Adobe XD', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator']
  const frontEndSkillArray = [
    'React JS / Next JS',
    'Javascript',
    'HTML / CSS / SASS',
    'Redux',
    'Wordpress',
  ]
  const backEndSkillArray = ['Node JS', 'Express', 'SQL', 'MongoDB']
  const otherSkillArray = ['Unit testing', 'Webpack', 'Google Cloud Platform', 'Firebase']
  return (
    <section className={styles.skillSection}>
      <h2>Skills</h2>
      <div>
        <section className={styles.UISection}>
          <img src={UISkillImage} alt="ui Icon" />
          <h3>UI / UX Design</h3>
          <ul>
            {uiSkillArray.map((skill) => (
              <li key={skill}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.308"
                  height="18.456"
                  viewBox="0 0 18.308 18.456"
                >
                  <text
                    id="L"
                    transform="matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)"
                    fill="#fed200"
                    fontSize="14"
                    fontFamily="Spartan-SemiBold, Spartan"
                    fontWeight="600"
                  >
                    <tspan x="-4.193" y="0">
                      L
                    </tspan>
                  </text>
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.frontEndSection}>
          <img src={FrontendSkillImage} alt="front end Icon" />
          <h3>Front-end Development</h3>
          <ul>
            {frontEndSkillArray.map((skill) => (
              <li key={skill}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.308"
                  height="18.456"
                  viewBox="0 0 18.308 18.456"
                >
                  <text
                    id="L"
                    transform="matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)"
                    fill="#fed200"
                    fontSize="14"
                    fontFamily="Spartan-SemiBold, Spartan"
                    fontWeight="600"
                  >
                    <tspan x="-4.193" y="0">
                      L
                    </tspan>
                  </text>
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.backEndSection}>
          <img src={BackendSkillImage} alt="backend Icon" />
          <h3>Back-end Development</h3>
          <ul>
            {backEndSkillArray.map((skill) => (
              <li key={skill}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.308"
                  height="18.456"
                  viewBox="0 0 18.308 18.456"
                >
                  <text
                    id="L"
                    transform="matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)"
                    fill="#fed200"
                    fontSize="14"
                    fontFamily="Spartan-SemiBold, Spartan"
                    fontWeight="600"
                  >
                    <tspan x="-4.193" y="0">
                      L
                    </tspan>
                  </text>
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.othersSection}>
          <img src={OtherSkillImage} alt="others Icon" />
          <h3>Others</h3>
          <ul>
            {otherSkillArray.map((skill) => (
              <li key={skill}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.308"
                  height="18.456"
                  viewBox="0 0 18.308 18.456"
                >
                  <text
                    id="L"
                    transform="matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)"
                    fill="#fed200"
                    fontSize="14"
                    fontFamily="Spartan-SemiBold, Spartan"
                    fontWeight="600"
                  >
                    <tspan x="-4.193" y="0">
                      L
                    </tspan>
                  </text>
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default SkillSection
