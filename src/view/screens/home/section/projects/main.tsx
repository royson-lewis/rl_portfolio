import React from 'react'

import Image from 'next/image'

import styles from './main.module.scss'

const SectionProjectsMain = () => (
  <section className={styles['projects-section']}>
    <div className={styles['project-category']}>
      <div className={styles['category-info']}>
        <h2>Projects</h2>
        <h3>UI/UX Design</h3>
        <p>
          Aliquam vitae in molestie elit faucibus nulla. Et nisl fames adipiscing placerat aliquet
          pulvinar tellus dictum sagittis. Mattis orci, et egestas purus quisque.
        </p>
      </div>
      <div className={styles['category-gallery']}>
        <div className={styles['category-project']}>
          <div className={styles['project-images']}>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/userupload/2904447/file/original-848325509e0ad2b48f43dc5a8ca727c7.png?compress=1&resize=640x480"
                alt="project thumbnail"
              />
            </div>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/users/1544818/screenshots/17077305/media/fe24e9e9b8ff058af40afdfe1a4950d9.png?compress=1&resize=700x525&vertical=top"
                alt="project thumbnail"
              />
            </div>
          </div>
          <h4>Agency</h4>
        </div>
        <div className={styles['category-project']}>
          <div className={styles['project-images']}>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/userupload/2904447/file/original-848325509e0ad2b48f43dc5a8ca727c7.png?compress=1&resize=640x480"
                alt="project thumbnail"
              />
            </div>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/users/1544818/screenshots/17077305/media/fe24e9e9b8ff058af40afdfe1a4950d9.png?compress=1&resize=700x525&vertical=top"
                alt="project thumbnail"
              />
            </div>
          </div>
          <h4>Essence Naturals</h4>
        </div>
      </div>
    </div>
    <div className={styles['project-category']}>
      <div className={styles['category-info']}>
        <h2>Projects</h2>
        <h3>Web Development</h3>
        <p>
          Aliquam vitae in molestie elit faucibus nulla. Et nisl fames adipiscing placerat aliquet
          pulvinar tellus dictum sagittis. Mattis orci, et egestas purus quisque.
        </p>
      </div>
      <div className={styles['category-gallery']}>
        <div className={styles['category-project']}>
          <div className={styles['project-images']}>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/userupload/2904447/file/original-848325509e0ad2b48f43dc5a8ca727c7.png?compress=1&resize=640x480"
                alt="project thumbnail"
              />
            </div>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/users/1544818/screenshots/17077305/media/fe24e9e9b8ff058af40afdfe1a4950d9.png?compress=1&resize=700x525&vertical=top"
                alt="project thumbnail"
              />
            </div>
          </div>
          <h4>Agency</h4>
        </div>
        <div className={styles['category-project']}>
          <div className={styles['project-images']}>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/userupload/2904447/file/original-848325509e0ad2b48f43dc5a8ca727c7.png?compress=1&resize=640x480"
                alt="project thumbnail"
              />
            </div>
            <div className={styles['project-image-wrapper']}>
              <Image
                width="400"
                height="600"
                src="https://cdn.dribbble.com/users/1544818/screenshots/17077305/media/fe24e9e9b8ff058af40afdfe1a4950d9.png?compress=1&resize=700x525&vertical=top"
                alt="project thumbnail"
              />
            </div>
          </div>
          <h4>Essence Naturals</h4>
        </div>
      </div>
    </div>
  </section>
)

export default SectionProjectsMain
