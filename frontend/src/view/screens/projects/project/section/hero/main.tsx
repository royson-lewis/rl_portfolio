import React, { useMemo } from 'react'

import Image from 'next/image'
import { easings, useChain, useSpring, useSpringRef, animated } from '@react-spring/web'

import MouseScrollIcon from '../../../assets/mouse-scroll-icon.svg'
import styles from './main.module.scss'

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
  return (
    <section className={styles['hero-section']}>
      <animated.h3 style={titleSprings}>{name}</animated.h3>
      <animated.p style={titleSprings}>{description}</animated.p>
      <animated.h4 style={titleSprings}>{category}</animated.h4>
      <AnimatedImage style={scrollSprings} src={MouseScrollIcon} alt="scroll mouse to view more" />
    </section>
  )
}

export default SectionHeroMain
