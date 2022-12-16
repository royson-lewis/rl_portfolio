import React, {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  PropsWithChildren,
} from 'react'

import Link from 'next/link'

interface LinkMainTypes {
  to?: string | { search: string }
  href?: string
  external?: boolean
  className?: string
  target?: string
  ariaLabel?: string
  rel?: string
  style?: CSSProperties
  onClick?: MouseEventHandler
  onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>
  portal?: string
  dir?: string
  popUpWindow?: boolean
  role?: string
  disabled?: boolean
}

const LinkMain: React.FC<PropsWithChildren<LinkMainTypes>> = ({
  to,
  href,
  external,
  className,
  target,
  rel,
  style,
  onClick,
  onKeyDown,
  children,
  portal,
  dir,
  popUpWindow,
  ariaLabel,
  role,
  disabled,
  ...props
}) => {
  if (external) {
    return (
      <a
        className={className}
        style={style}
        href={href}
        target={target || '_blank'}
        rel={rel || 'noreferrer nofollow'}
        onClick={onClick}
        onKeyDown={onKeyDown}
        aria-label={ariaLabel}
        role={role}
      >
        {children}
      </a>
    )
  }
  if (popUpWindow) {
    const portalUrl = portal ? `http://${portal}${to}${dir || ''}` : href
    const openPopUpWindow = () => {
      const { innerWidth, open } = window
      const reduceWith = (innerWidth / 100) * 30
      const smallScreenWidth = innerWidth - reduceWith
      const smallScreenLeft = innerWidth < 768 ? 0 : 20
      const smallScreenTop = innerWidth < 768 ? 20 : 200
      open(
        portalUrl,
        '',
        `top=${smallScreenTop},left=${smallScreenLeft},height=600,width=${smallScreenWidth},scrollbars=auto`,
      )
    }
    return (
      <a
        className={className}
        style={style}
        href={undefined}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        role={role}
        onClick={openPopUpWindow}
        onKeyDown={openPopUpWindow}
      >
        {children}
      </a>
    )
  }
  if (!disabled) {
    return (
      <Link
        {...props}
        aria-disabled={disabled}
        style={style}
        className={className}
        href={to || '#'}
        role="link"
        tabIndex={0}
      >
        {children}
      </Link>
    )
  }
  return (
    <a aria-disabled={disabled} style={style} className={className} role="link" tabIndex={0}>
      {children}
    </a>
  )
}

export default LinkMain
