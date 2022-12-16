import React from 'react'

import Image from 'next/image'

import MouseScrollIcon from '../../../assets/mouse-scroll-icon.svg'
import styles from './main.module.scss'

const SectionHeroMain: React.FC<{
  name: string
  description: string
  category: string
}> = ({ name, description, category }) => (
  <section className={styles['hero-section']}>
    <h3>{name}</h3>
    <p>{description}</p>
    <h4>{category}</h4>
    <Image src={MouseScrollIcon} alt="scroll mouse to view more" />
  </section>
)

export default SectionHeroMain
