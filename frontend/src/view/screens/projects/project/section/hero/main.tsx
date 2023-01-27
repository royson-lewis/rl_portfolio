import React, { useMemo } from 'react'

import { easings, useChain, useSpring, useSpringRef, animated } from '@react-spring/web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import MouseScrollIcon from '../../../assets/mouse-scroll-icon.svg'
import styles from './main.module.scss'

import LinkMain from 'components/link/main'

const SectionHeroMain: React.FC<{
  name: string
  description?: string
  logo: string
  category: string
  brandPrimaryColor?: string
  link?: string
}> = ({ name, description, category, logo, brandPrimaryColor, link }) => {
  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const titleRef = useSpringRef()
  const titleSprings = useSpring({
    ref: titleRef,
    delay: 500,
    from: titleFromState,
    to: titleToState,
  })

  const scrollRef = useSpringRef()
  const scrollSprings = useSpring({
    ref: scrollRef,
    from: { y: 0, opacity: 0 },
    to: [
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
    ],
    config: {
      easing: easings.easeInCubic,
    },
    loop: {
      delay: 500,
    },
  })

  useChain([titleRef, scrollRef])

  const AnimatedLink = animated(LinkMain)
  return (
    <section className={styles['hero-section']}>
      <animated.img
        className={styles['project-logo']}
        alt="project logo"
        width="175"
        height="29"
        src={logo}
        style={titleSprings}
      />
      <animated.h3 style={titleSprings}>{name}</animated.h3>
      <animated.p style={titleSprings}>{description}</animated.p>
      <animated.h4 style={titleSprings}>{category}</animated.h4>
      {link && (
        <AnimatedLink
          href={link}
          external
          style={{
            ...titleSprings,
            color: brandPrimaryColor,
          }}
        >
          Launch Live Project
          <FontAwesomeIcon icon={faArrowUp} />
        </AnimatedLink>
      )}
      <animated.img src={MouseScrollIcon.src} alt="Mouse scroll Icon" style={scrollSprings} />
    </section>
  )
}

export default SectionHeroMain
