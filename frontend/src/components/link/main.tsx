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
  ariaLabel,
  role,
  disabled,
  ...props
}) => {
  if (!disabled) {
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
    return (
      <Link
        {...props}
        aria-disabled={disabled}
        style={style}
        className={className}
        href={to || href || '#'}
        role="link"
        tabIndex={0}
        scroll={false}
        onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
          if (onClick) onClick(e)
          window.scrollTo(0, 0)
        }}
        onKeyDown={onKeyDown}
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
