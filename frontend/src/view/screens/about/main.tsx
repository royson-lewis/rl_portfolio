import React, { useEffect, useMemo } from 'react'

import Image from 'next/image'

import styles from './main.module.scss'
import MouseScrollIcon from '../projects/assets/mouse-scroll-icon.svg'
import Profile1 from './assets/profile-1.png'
import Profile2 from './assets/profile-2.png'
import ButtonMain from '../../../components/button/main'
import { animated, useSpring, easings, useChain, useSpringRef, useInView } from '@react-spring/web'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ExperienceTypes {
  title: string
  description: string
  date: {
    from: number | string
    to: number | string
  }
}

const experiences:ExperienceTypes[] = [
  {
    title: "Software Engineer & UI/UX Designer at AITrade",
    description: "Fermentum suspendisse felis pellentesque nulla netus. Odio condimentum netus in diam ut sed maecenas. Facilisi ut ultricies natoque morbi nisl. Nulla aliquam morbimattis penatibus diam, fermentum dictum sed fames.",
    date: {
      from: 2020,
      to: "Present"
    }
  },
  {
    title: "Freelance Software Developer",
    description: "Fermentum suspendisse felis pellentesque nulla netus. Odio condimentum netus in diam ut sed maecenas. Facilisi ut ultricies natoque morbi nisl. Nulla aliquam morbimattis penatibus diam, fermentum dictum sed fames.",
    date: {
      from: 2019,
      to: 2020
    }
  }
]

const AboutMain = () => {
  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const titleRef = useSpringRef()
  const titleSprings = useSpring({
    ref: titleRef,
    delay: 500,
    from: titleFromState,
    to: titleToState
  })

  const scrollRef = useSpringRef()
  const scrollSprings = useSpring({
    ref: scrollRef,
    from: { y: 0, opacity: 0 },
    to: [
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    ],
    config: {
      easing: easings.easeInCubic
    },
    loop: {
      delay: 500
    }
  })

  useChain([titleRef, scrollRef])

  const AnimatedImage = animated(Image)
  return (
    <>
      <main className={styles['about-page']}>
        <section className={styles['hero-section']}>
          <animated.h3 style={titleSprings}>About Me</animated.h3>
          <AnimatedImage style={scrollSprings} src={MouseScrollIcon} alt="scroll mouse to view more" />
        </section>
        <section className={styles['about-body']}>
          <animated.div style={titleSprings} className={styles['about-image-container']}>
            <Image src={Profile1} alt="profile image 1" />
            <Image src={Profile2} alt="profile image 2" />
          </animated.div>
          <p>
            Hello again, I’m <strong>Royson Lewis</strong>, I am a UI/UX designer and Software
            developer with hands-on experience in building web apps and websites from scratch from
            initial designs to development and all the way to hosting a complete production-ready
            software in a custom-configured server.
          </p>
          <div className={styles['about-experience']}>
            <h3>Experience</h3>
            <div className={styles['experience-container']}>
              {
                experiences.map((experience) => {
                  return (
                    <Experience key={experience.title} experience={experience} />
                  )
                })
              }
            </div>
          </div>
          <ButtonMain className="no-border">
            Download Resume
            <FontAwesomeIcon icon={faDownload} />
          </ButtonMain>
        </section>
      </main>
    </>
  )
}

const Experience: React.FC<{
  experience: ExperienceTypes 
}> = ({ experience }) => {
  const [ref, inView] = useInView({ rootMargin: '0% 0% -20%' })

  const titleFromState = useMemo(() => ({ x: 100, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ x: 0, opacity: 1 }), [])

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
    <div ref={ref} className={styles.experience}>
      <animated.h4 style={titleSprings}>{experience.title}</animated.h4>
      <animated.h5 style={titleSprings}>
        {`${experience.date?.from} - ${experience.date?.to}`}
      </animated.h5>
      <animated.p style={titleSprings}>
        {experience.description}
      </animated.p>
    </div>
  )
}

export default AboutMain
