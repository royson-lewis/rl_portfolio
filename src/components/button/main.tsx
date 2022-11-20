import React from 'react'

import { ButtonProps } from 'react-bootstrap/Button'
import { Button } from 'react-bootstrap'
import cn from 'classnames'

import styles from './main.module.scss'

const ButtonMain: React.FC<ButtonProps> = (props) => {
  const { className, type, children, disabled } = props
  return (
    <Button
      {...props}
      className={cn(styles['button-main'], {
        [styles.primary]: !className,
        [styles[className || '']]: className,
        [styles.disabled]: disabled,
      })}
      type={type || 'button'}
    >
      {children}
    </Button>
  )
}

export default ButtonMain
