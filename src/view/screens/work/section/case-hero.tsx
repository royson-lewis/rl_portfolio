import * as React from 'react'

import styles from '../main.module.scss'
import EssenceHeroArt from './essence/essence-hero-art'
import EssenceHeroArtDesktop from './essence/essence-hero-art-desktop'
import VamyouHeroArt from './vamyou/vamyou-hero-art'
import VamyouHeroArtDesktop from './vamyou/vamyou-hero-art-desktop'

const CaseHero = (props: { project: string }) => {
  const projects: Record<
    string,
    {
      heroArt: React.ReactElement
      heroArtDesktop: React.ReactElement
      logo: string
      description: string
      link: string
    }
  > = {
    essence: {
      heroArt: <EssenceHeroArt />,
      heroArtDesktop: <EssenceHeroArtDesktop />,
      logo: '/essence logo.png',
      description: 'A daily essential product company Inspired by the nature!',
      link: 'https://essence-server.web.app/',
    },
    vamyou: {
      heroArt: <VamyouHeroArt />,
      heroArtDesktop: <VamyouHeroArtDesktop />,
      logo: '/vamyouLogo@2x.png',
      description:
        'A blog featuring all the latest trends and techniques essential for success in the field of business and finance.',
      link: 'https://jen-blog-284811.uc.r.appspot.com/',
    },
  }

  const { heroArt, heroArtDesktop, logo, description, link } = projects[props.project]

  return (
    <section className={styles.hero}>
      <div className={styles.heroArtMobile}>{heroArt}</div>
      <div className={styles.heroArtDesktop}>{heroArtDesktop}</div>
      <div className={styles.workTitle}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h4>{description}</h4>
        <a rel="noreferrer" target="_blank" href={link}>
          <button type="button">Launch Project</button>
        </a>
      </div>
    </section>
  )
}

export default CaseHero
