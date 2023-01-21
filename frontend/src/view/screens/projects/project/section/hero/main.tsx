import React, { useMemo } from 'react'

import Image from 'next/image'
import { easings, useChain, useSpring, useSpringRef, animated } from '@react-spring/web'

import MouseScrollIcon from '../../../assets/mouse-scroll-icon.svg'
import styles from './main.module.scss'
import SectionMouseScrollIcon from '../mouse-scroll-icon/main'

const SectionHeroMain: React.FC<{
  name: string
  description: string
  category: string
}> = ({ name, description, category }) => {
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

  const AnimatedImage = animated(Image)
  const AnimatedMouseScroll = animated(SectionMouseScrollIcon)
  return (
    <section className={styles['hero-section']}>
      <AnimatedImage alt="gridplex logo" width="175" height="29" src="https://rl-portfolio.s3.ap-south-1.amazonaws.com/projects/gridplex/gallery/gp_logo.svg" style={titleSprings} />
      <animated.h3 style={titleSprings}>{name}</animated.h3>
      <animated.p style={titleSprings}>{description}</animated.p>
      <animated.h4 style={titleSprings}>{category}</animated.h4>
      <AnimatedMouseScroll color="linear-gradient(68.47deg, #EA698B 9.78%, #D55D92 20.92%, #C05299 38.53%, #973AA8 55.56%, #822FAF 68.52%, #6D23B6 80.87%, #6411AD 94.46%, #571089 105.29%, #47126B 115.84%)" style={scrollSprings} />
    </section>
  )
}

export default SectionHeroMain
