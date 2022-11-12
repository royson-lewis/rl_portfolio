import { useState, useEffect, useCallback } from 'react'
import * as React from 'react'

import Link from 'next/link'

import styles from '../main.module.scss'
import SlideLeftIcon from '../assets/slide-left-icon.svg'
import SlideRightIcon from '../assets/slide-right-icon.svg'

const WorkSection = () => {
  const [slider, setSlider] = useState({
    index: 0,
  })

  const sliderWorks = [
    {
      image: '/essence work slider mobile.png',
      logo: '/essenceLogo.png',
      description:
        'An Ecommerce web app featuring daily essential  products inspired from nature for a better future.',
      siteLink: 'https://essence-server.web.app/',
      caseLink: '/work/essence',
      accentColor: '#58CF6E',
    },
    {
      image: '/vamyou work slider mobile.png',
      logo: '/vamyouLogo.png',
      description:
        'A blog featuring all the latest trends and techniques essential for success in the field of business and finance.',
      siteLink: 'https://jen-blog-284811.uc.r.appspot.com/',
      caseLink: '/work/vamyou',
      accentColor: '#FC326F',
    },
  ]

  const totalWidth = (sliderWorks.length - 1) * -100

  const slideLeft = useCallback(() => {
    if (slider.index !== totalWidth) {
      setSlider((prev) => ({
        ...prev,
        index: slider.index - 100,
      }))
    } else {
      setSlider((prev) => ({
        ...prev,
        index: 0,
      }))
    }
  }, [setSlider, totalWidth, slider.index])

  useEffect(() => {
    const intervalID = setInterval(slideLeft, 3500)
    return () => {
      clearInterval(intervalID)
    }
  }, [slider.index, slideLeft])

  function slideRight() {
    if (slider.index !== 0) {
      setSlider({
        ...slider,
        index: slider.index + 100,
      })
    } else {
      setSlider({
        ...slider,
        index: totalWidth,
      })
    }
  }

  const setSlide: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const index = Number(e.currentTarget.className)
    if (index === 0) {
      setSlider({
        ...slider,
        index: 0,
      })
    } else {
      setSlider({
        ...slider,
        index: index * -100,
      })
    }
  }

  return (
    <section className={styles.workSection}>
      <h2>Work</h2>
      <section className={styles.workSlider}>
        <div className={styles.sliderContainer}>
          {sliderWorks.map((work) => (
            <React.Fragment key={work.logo}>
              <div style={{ transform: `translateX(${slider.index}vw)` }} key={work.image}>
                <div className={styles.imageContainer}>
                  <img src={work.image} alt={work.image} />
                  <div className={styles.infoOverlay} />
                </div>
                <section>
                  <div className={styles.logoContainer}>
                    <img src={work.logo} alt={work.logo} />
                  </div>
                  <p>{work.description}</p>
                  <div className={styles.buttonContainer}>
                    <a rel="noreferrer" target="_blank" href={work.siteLink}>
                      <button type="button">View Live Project</button>
                    </a>
                    <Link href={work.caseLink}>
                      <button type="button" style={{ border: `5px solid ${work.accentColor}` }}>
                        View Case
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.sliderDotContainer}>
          {sliderWorks.map((work) => (
            <button
              type="button"
              onClick={setSlide}
              className={sliderWorks.indexOf(work).toString()}
              key={work.image}
              id={slider.index === sliderWorks.indexOf(work) * -100 ? 'currentDot' : ''}
            />
          ))}
        </div>
        <div className={styles.sliderButtons}>
          <button type="button" onClick={slideRight}>
            <img alt="Right slider icon" src={SlideLeftIcon} />
          </button>
          <button type="button" onClick={slideLeft}>
            <img alt="left slider icon" src={SlideRightIcon} />
          </button>
        </div>
      </section>
    </section>
  )
}

export default WorkSection
