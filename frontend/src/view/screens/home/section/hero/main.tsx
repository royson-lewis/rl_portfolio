import React, { useMemo, useState } from 'react'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { animated, useInView, useIsomorphicLayoutEffect, useSpring } from '@react-spring/web'

import styles from './main.module.scss'
import HeroEllipse from '../../assets/hero-ellipse.svg'
import ButtonMain from '../../../../../components/button/main'

const SectionHeroMain = () => {
  const [initialLoad, setInitialLoad] = useState(true)

  const [ref, inView] = useInView({ rootMargin: '-50% 0% 0%' })

  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const [titleSprings, titleApi] = useSpring(titleFromState, [titleFromState])

  const socialFromState = useMemo(() => ({ transform: 'scale(0)' }), [])
  const socialToState = useMemo(() => [{ transform: 'scale(1)' }], [])

  const [socialSprings, socialApi] = useSpring(socialFromState, [socialFromState])

  const ellipseFromState = useMemo(() => ({ transform: 'scale(1) rotate(10deg)' }), [])
  const ellipseToState = useMemo(() => [{ transform: 'scale(1) rotate(0deg)' }], [])

  const [ellipseSprings, ellipseApi] = useSpring(ellipseFromState, [ellipseFromState])

  const startAnimation = (delay: number) => {
    titleApi.start({
      delay,
      from: titleFromState,
      to: titleToState,
    })
    socialApi.start({
      delay,
      from: socialFromState,
      to: socialToState,
    })
    ellipseApi.start({
      delay,
      from: ellipseFromState,
      to: ellipseToState,
    })
  }
  const revertAnimation = () => {
    titleApi.start({
      to: titleFromState,
    })
    socialApi.start({
      to: socialFromState,
    })
    ellipseApi.start({
      to: ellipseFromState,
    })
  }

  useIsomorphicLayoutEffect(() => {
    if (initialLoad) {
      startAnimation(500)
      setInitialLoad(false)
    } else if (inView) {
      startAnimation(0)
    } else {
      revertAnimation()
    }
  }, [inView, initialLoad])

  const AnimatedImage = animated(Image)
  const AnimatedButton = animated(ButtonMain)
  return (
    <section ref={ref} className={styles['hero-section']}>
      <AnimatedImage
        style={ellipseSprings}
        width="100"
        height="100"
        className={styles['hero-ellipse']}
        src={HeroEllipse.src}
        alt="Hero ellipse"
      />
      <div className={styles['hero-info']}>
        <animated.h2 style={titleSprings}>
          Hi, I&apos;m <strong>Royson Lewis</strong>
        </animated.h2>
        <animated.h3 style={titleSprings}>
          Software Developer<span>,</span>
        </animated.h3>
        <animated.h3 style={titleSprings}>UI Designer</animated.h3>
        <div className={styles['social-container']}>
          <animated.span style={socialSprings} className={styles['icon-wrapper']}>
            <FontAwesomeIcon icon={faGithub} />
          </animated.span>
          <animated.span style={socialSprings} className={styles['icon-wrapper']}>
            <FontAwesomeIcon icon={faLinkedin} />
          </animated.span>
          <animated.span style={socialSprings} className={styles['icon-wrapper']}>
            <FontAwesomeIcon icon={faDribbble} />
          </animated.span>
        </div>
        <AnimatedButton style={titleSprings} className="no-border">
          View Resume
        </AnimatedButton>
      </div>
    </section>
  )
}

export default SectionHeroMain
