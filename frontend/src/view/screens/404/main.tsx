import React from 'react'

import styles from './main.module.scss'

import ButtonMain from 'components/button/main'
import LinkMain from 'components/link/main'
import uris from 'config/uri'

const Pages404Main: React.FC = () => (
  <main className={styles['pages-404-main']}>
    <div>
      <h1>404!</h1>
      <span>Page not found!</span>
      <p>Sorry, couldn&apos;t find the page you are looking for.</p>
      <LinkMain to={uris.index} ariaLabel="Return Home">
        <ButtonMain>Return Home</ButtonMain>
      </LinkMain>
    </div>
  </main>
)

export default Pages404Main
