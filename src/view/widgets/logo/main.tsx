import React from 'react'

import cn from 'classnames'
import Image from 'next/image'

import styles from './main.module.scss'
import RLLogo from './assets/rl-logo.svg'
import RLLogoIconLight from './assets/rl-logo-icon-light.svg'
import uris from '../../../config/uri'
import LinkMain from '../../../components/link/main'

const LogoMain: React.FC<{
  disableLink?: boolean
  lightIcon?: boolean
}> = ({ disableLink, lightIcon }) => (
  <div className={cn(styles['logo-main-container'])}>
    <LinkMain
      style={{ pointerEvents: disableLink ? 'none' : 'all' }}
      to={disableLink ? '#' : uris.index}
    >
      <Image priority alt="aitrade logo" src={lightIcon ? RLLogoIconLight : RLLogo} />
    </LinkMain>
  </div>
)

export default LogoMain
