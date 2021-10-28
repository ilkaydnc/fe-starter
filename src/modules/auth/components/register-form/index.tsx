import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Button, Input } from '@/components'

import styles from './register-form.module.scss'

const RegisterForm: FC = () => {
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
      <h2 className={styles.title}>Create new account</h2>
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Email"
        onChange={updateInputValues}
        required
      />
      <Input
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        onChange={updateInputValues}
        required
      />
      <Input
        name="confirm-password"
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        onChange={updateInputValues}
        required
      />
      <Link href="/auth/login" passHref>
        Have an account? Login your account!
      </Link>
      <Button type="submit" block>
        Register
      </Button>
    </form>
  )
}

export default RegisterForm
