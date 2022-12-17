import React from 'react'

import styles from './main.module.scss'

import ButtonMain from 'components/button/main'
import LinkMain from 'components/link/main'
import uris from 'config/uri'

const Pages500Main: React.FC = () => (
  <main className={styles['pages-500-main']}>
    <div>
      <h1>500!</h1>
      <span>Something went wrong!</span>
      <p>Sorry, Something went wrong while fetching your request! Please try again.</p>
      <LinkMain to={uris.index} ariaLabel="Return Home">
        <ButtonMain>Return Home</ButtonMain>
      </LinkMain>
    </div>
  </main>
)

export default Pages500Main
