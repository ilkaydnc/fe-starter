import { FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './button.module.scss'

export interface IButtonProps {
  type?: 'button' | 'submit' | 'reset'
  theme?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  className?: string
  block?: boolean
  disabled?: boolean
  onClick?: () => void
  children?: ReactNode
}

const Button: FC<IButtonProps> = ({
  type,
  theme = 'primary',
  size = 'md',
  className,
  block,
  disabled,
  onClick,
  children,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={cn(
      styles.base,
      styles[theme],
      styles[size],
      block && styles.block,
      className
    )}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
