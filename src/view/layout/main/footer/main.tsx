import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import styles from './main.module.scss'
import LogoMain from '../../../widgets/logo/main'
import LinkMain from '../../../../components/link/main'

const FooterMain = () => (
  <>
    <footer className={styles.footer}>
      <section className={styles['footer-contact']}>
        <h4>Contact</h4>
        <h5>Get in touch</h5>
        <LinkMain to="#">
          hello@roysonlewis.com
          <FontAwesomeIcon icon={faArrowUp} />
        </LinkMain>
        <div className={styles['social-contacts']}>
          <LinkMain external href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </LinkMain>
          <LinkMain external href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </LinkMain>
        </div>
      </section>
      <section className={styles['footer-bottom']}>
        <LogoMain lightIcon />
        <div className={styles['company-info']}>
          <p>&copy; Royson Lewis 2022</p>
          <p>v{process.env.NEXT_PUBLIC_VERSION || '1.0.0'}</p>
        </div>
        <div className={styles['social-links']}>
          <LinkMain external href="#">
            <FontAwesomeIcon icon={faGithub} />
          </LinkMain>
          <LinkMain external href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </LinkMain>
          <LinkMain external href="#">
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

export default FooterMain
