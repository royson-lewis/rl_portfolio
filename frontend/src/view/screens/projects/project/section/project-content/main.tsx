import React from 'react'

import Image from 'next/image'

import styles from './main.module.scss'
import Content1Image from '../../../assets/content-image-1.png'

const SectionProjectContentMain = () => (
  <>
    <section className={styles['project-content-section']}>
      <h3>Project Overview</h3>
      <p>
        ESSENCE is an eCommerce platform that provides daily essential products created with
        ingredients without any artificial processing or harmful chemicals. It focuses on making
        people get closer to the nature through its products with an elegant and sustainable way for
        the eco-system.
      </p>
      <div className={styles['content-dynamic-section']}>
        <Image alt="project content" src={Content1Image} />
      </div>
    </section>
    <section className={styles['project-content-section']}>
      <h3>Project Overview</h3>
      <p>
        ESSENCE is an eCommerce platform that provides daily essential products created with
        ingredients without any artificial processing or harmful chemicals. It focuses on making
        people get closer to the nature through its products with an elegant and sustainable way for
        the eco-system.
      </p>
      <div className={styles['content-dynamic-section']}>
        <Image alt="project content" src={Content1Image} />
      </div>
    </section>
    <section className={styles['project-content-section']}>
      <h3>Project Overview</h3>
      <p>
        ESSENCE is an eCommerce platform that provides daily essential products created with
        ingredients without any artificial processing or harmful chemicals. It focuses on making
        people get closer to the nature through its products with an elegant and sustainable way for
        the eco-system.
      </p>
      <div className={styles['content-dynamic-section']}>
        <Image alt="project content" src={Content1Image} />
      </div>
    </section>
  </>
)

export default SectionProjectContentMain
