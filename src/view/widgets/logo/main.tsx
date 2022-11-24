import React from 'react'

import cn from 'classnames'
import Image from 'next/image'

import styles from './main.module.scss'
import RLLogo from './assets/rl-logo.svg'
import uris from "../../../config/uri";
import LinkMain from "../../../components/link/main";

const LogoMain: React.FC<{
  disableLink?: boolean
  monotone?: boolean
  light?: boolean
  dark?: boolean
  authPage?: boolean
  withBackground?: boolean
}> = ({ disableLink}) => {
  return (
    <div
      className={cn(
        styles['logo-main-container'],
      )}
    >
      <LinkMain
        style={{ pointerEvents: disableLink ? 'none' : 'all' }}
        to={disableLink ? '#' : uris.index}
      >
        <div className={styles['image-container']}>
          <Image priority sizes="100" alt="aitrade logo" src={RLLogo} />
        </div>
      </LinkMain>
    </div>
  )
}

export default LogoMain
