/** @format */

import styles from "../styles/Home.module.scss";

export default function SkillSection() {
  let uiSkillArray = ["Adobe XD", "Figma", "Adobe Photoshop", "Adobe Illustrator"];
  let frontEndSkillArray = ["React JS / Next JS", "Javascript", "HTML / CSS / SASS", "Redux", "Wordpress"];
  let backEndSkillArray = ["Node JS", "Express", "SQL", "MongoDB"];
  let otherSkillArray = ["Unit testing", "Webpack", "Google Cloud Platform", "Firebase"];
  return (
    <section className={styles.skillSection}>
      <h2>Skills</h2>
      <div>
        <section className={styles.UISection}>
          <img src='/uiSkill.svg' alt='ui Icon'></img>
          <h3>UI / UX Design</h3>
          <ul>
            {uiSkillArray.map((skill) => {
              return (
                <li key={skill}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='18.308' height='18.456' viewBox='0 0 18.308 18.456'>
                    <text id='L' transform='matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)' fill='#fed200' fontSize='14' fontFamily='Spartan-SemiBold, Spartan' fontWeight='600'>
                      <tspan x='-4.193' y='0'>
                        L
                      </tspan>
                    </text>
                  </svg>
                  {skill}
                </li>
              );
            })}
          </ul>
        </section>
        <section className={styles.frontEndSection}>
          <img src='/frontendSkill.svg' alt='front end Icon'></img>
          <h3>Front-end Development</h3>
          <ul>
            {frontEndSkillArray.map((skill) => {
              return (
                <li key={skill}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='18.308' height='18.456' viewBox='0 0 18.308 18.456'>
                    <text id='L' transform='matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)' fill='#fed200' fontSize='14' fontFamily='Spartan-SemiBold, Spartan' fontWeight='600'>
                      <tspan x='-4.193' y='0'>
                        L
                      </tspan>
                    </text>
                  </svg>
                  {skill}
                </li>
              );
            })}
          </ul>
        </section>
        <section className={styles.backEndSection}>
          <img src='/backendSkill.svg' alt='backend Icon'></img>
          <h3>Back-end Development</h3>
          <ul>
            {backEndSkillArray.map((skill) => {
              return (
                <li key={skill}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='18.308' height='18.456' viewBox='0 0 18.308 18.456'>
                    <text id='L' transform='matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)' fill='#fed200' fontSize='14' fontFamily='Spartan-SemiBold, Spartan' fontWeight='600'>
                      <tspan x='-4.193' y='0'>
                        L
                      </tspan>
                    </text>
                  </svg>
                  {skill}
                </li>
              );
            })}
          </ul>
        </section>
        <section className={styles.othersSection}>
          <img src='/otherSkill.svg' alt='others Icon'></img>
          <h3>Others</h3>
          <ul>
            {otherSkillArray.map((skill) => {
              return (
                <li key={skill}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='18.308' height='18.456' viewBox='0 0 18.308 18.456'>
                    <text id='L' transform='matrix(-0.719, -0.695, -0.695, 0.719, 6.375, 12.105)' fill='#fed200' fontSize='14' fontFamily='Spartan-SemiBold, Spartan' fontWeight='600'>
                      <tspan x='-4.193' y='0'>
                        L
                      </tspan>
                    </text>
                  </svg>
                  {skill}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}
