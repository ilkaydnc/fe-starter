import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Button, Input } from '@/components'

import styles from './login-form.module.scss'
import { login } from '../../redux/authSlice'
import { LoginActionPayload } from '../../redux/types'
import { useAppDispatch } from '@/app/hooks'

const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState<LoginActionPayload>({
    email: '',
    password: '',
  })

  const updateInputValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      console.log(values)

      dispatch(login(values))
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
      <Link href="/auth/register" passHref>
        Don't have an account? Create an account!
      </Link>
      <Button type="submit" block>
        Login
      </Button>
    </form>
  )
}

export default LoginForm
