import React from 'react'

import Image from 'next/image'

import MouseScrollIcon from '../../../assets/mouse-scroll-icon.svg'
import styles from './main.module.scss'

const SectionHeroMain = () => (
  <section className={styles['hero-section']}>
    <h3>Essence Naturals</h3>
    <p>A daily essential product company Inspired by the nature!</p>
    <h4>UI/UX Design</h4>
    <Image src={MouseScrollIcon} alt="scroll mouse to view more" />
  </section>
)

export default SectionHeroMain
