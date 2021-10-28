import { FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './button.module.scss'

export interface IButtonProps {
  theme?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  className?: string
  block?: boolean
  onClick?: () => void
  children?: ReactNode
}

const Button: FC<IButtonProps> = ({
  theme = 'primary',
  size = 'md',
  className,
  block,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className={cn(
      styles.base,
      styles[theme],
      styles[size],
      block && styles.block,
      className
    )}
  >
    {children}
  </button>
)

export default Button
