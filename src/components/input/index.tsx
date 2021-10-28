import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react'
import cn from 'classnames'

import styles from './input.module.scss'

export interface IInputProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  className?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<IInputProps> = ({
  type,
  name,
  label,
  className,
  value,
  placeholder,
  disabled,
  onChange,
}) => (
  <div className={styles.container}>
    {label && (
      <label htmlFor={name} className={cn(styles.label)}>
        {label}
      </label>
    )}
    <input
      id={name}
      type={type}
      className={cn(styles.base, className)}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  </div>
)

export default Input
