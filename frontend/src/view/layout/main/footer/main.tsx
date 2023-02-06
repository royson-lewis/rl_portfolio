import React, { useEffect, useMemo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useInView, animated, useSpring } from '@react-spring/web'

import styles from './main.module.scss'
import LogoMain from '../../../widgets/logo/main'
import LinkMain from '../../../../components/link/main'

const FooterMain = () => {
  const [ref, inView] = useInView({ rootMargin: '0% 0% -60%' })

  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const [titleSprings, titleApi] = useSpring(
    {
      ...titleFromState,
    },
    [titleFromState],
  )

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
  }, [inView, titleApi, titleFromState, titleToState])

  const AnimatedLink = animated(LinkMain)
  return (
    <>
      <footer className={styles.footer}>
        <section ref={ref} id="contact" className={styles['footer-contact']}>
          <animated.h4 style={titleSprings}>Contact</animated.h4>
          <animated.h5 style={titleSprings}>Get in touch</animated.h5>
          <AnimatedLink style={titleSprings} external href={process.env.NEXT_PUBLIC_EMAIL_TO}>
            hello@roysonlewis.com
            <FontAwesomeIcon icon={faArrowUp} />
          </AnimatedLink>
          <animated.div style={titleSprings} className={styles['social-contacts']}>
            <LinkMain external href={process.env.NEXT_PUBLIC_TWITTER_DM}>
              <FontAwesomeIcon icon={faTwitter} />
            </LinkMain>
            <LinkMain external href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}>
              <FontAwesomeIcon icon={faLinkedin} />
            </LinkMain>
          </animated.div>
        </section>
        <section className={styles['footer-bottom']}>
          <LogoMain lightIcon />
          <div className={styles['company-info']}>
            <p>&copy; Royson Lewis 2023</p>
            <p>v{process.env.NEXT_PUBLIC_VERSION || '1.0.0'}</p>
          </div>
          <div className={styles['social-links']}>
            <LinkMain external href={process.env.NEXT_PUBLIC_GITHUB_PROFILE}>
              <FontAwesomeIcon icon={faGithub} />
            </LinkMain>
            <LinkMain external href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}>
              <FontAwesomeIcon icon={faLinkedin} />
            </LinkMain>
            <LinkMain external href={process.env.NEXT_PUBLIC_DRIBBBLE_PROFILE}>
              <FontAwesomeIcon icon={faDribbble} />
            </LinkMain>
          </div>
          <div className={styles['other-links']}>
            <LinkMain to="/sitemap.xml">Sitemap</LinkMain>
          </div>
        </section>
      </footer>
    </>
  )
}

export default FooterMain
