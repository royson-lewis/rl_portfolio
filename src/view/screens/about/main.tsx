import React from 'react'

import Image from 'next/image'

import styles from './main.module.scss'
import MouseScrollIcon from '../projects/assets/mouse-scroll-icon.svg'
import Profile1 from './assets/profile-1.png'
import Profile2 from './assets/profile-2.png'
import ButtonMain from '../../../components/button/main'

const AboutMain = () => (
  <>
    <main className={styles['about-page']}>
      <section className={styles['hero-section']}>
        <h3>About Me</h3>
        <Image src={MouseScrollIcon} alt="scroll mouse to view more" />
      </section>
      <section className={styles['about-body']}>
        <div className={styles['about-image-container']}>
          <Image src={Profile1} alt="profile image 1" />
          <Image src={Profile2} alt="profile image 2" />
        </div>
        <p>
          Hello again, I’m <strong>Royson Lewis</strong>, I am a UI/UX designer and Software
          developer with hands-on experience in building web apps and websites from scratch from
          initial designs to development and all the way to hosting a complete production-ready
          software in a custom-configured server.
        </p>
        <div className={styles['about-experience']}>
          <h3>Experience</h3>
          <div className={styles['experience-container']}>
            <div className={styles.experience}>
              <h4>Software Engineer & UI/UX Designer at AITrade</h4>
              <h5>2020 - Present</h5>
              <p>
                Fermentum suspendisse felis pellentesque nulla netus. Odio condimentum netus in diam
                ut sed maecenas. Facilisi ut ultricies natoque morbi nisl. Nulla aliquam morbi
                mattis penatibus diam, fermentum dictum sed fames.
              </p>
            </div>
            <div className={styles.experience}>
              <h4>Freelance Software Developer</h4>
              <h5>2019 - 2020</h5>
              <p>
                Fermentum suspendisse felis pellentesque nulla netus. Odio condimentum netus in diam
                ut sed maecenas. Facilisi ut ultricies natoque morbi nisl. Nulla aliquam morbi
                mattis penatibus diam, fermentum dictum sed fames.
              </p>
            </div>
          </div>
        </div>
        <ButtonMain className="no-border">Download Resume</ButtonMain>
      </section>
    </main>
  </>
)

export default AboutMain
