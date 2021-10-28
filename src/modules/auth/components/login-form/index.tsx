import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import cn from 'classnames'

import { Button, Input } from '@/components'

import styles from './login-form.module.scss'

const LoginForm: FC = () => {
  const [values, setValues] = useState({})

  const updateInputValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      console.log(values)
    },
    [values]
  )

  return (
    <form onSubmit={onSubmit} className={cn(styles.container)}>
      <h2 className={styles.title}>Login your account</h2>
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Email"
        onChange={updateInputValues}
      />
      <Input
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        onChange={updateInputValues}
      />
      <Button type="submit" block>
        Login
      </Button>
    </form>
  )
}

export default LoginForm
