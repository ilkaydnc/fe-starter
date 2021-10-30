import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Button, Input } from '@/components'

import styles from './register-form.module.scss'
import { RegisterActionPayload } from '../../redux/types'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { register } from '../../redux/authSlice'

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.auth)
  const [values, setValues] = useState<RegisterActionPayload>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const updateInputValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      dispatch(register(values))
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
        disabled={loading}
      />
      <Input
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        onChange={updateInputValues}
        required
        disabled={loading}
      />
      <Input
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        onChange={updateInputValues}
        required
        disabled={loading}
      />
      {error && <div className={styles.error}>{error}</div>}
      <Link href="/auth/login" passHref>
        Have an account? Login your account!
      </Link>
      <Button type="submit" block disabled={loading}>
        {loading ? 'Sending...' : 'Register'}
      </Button>
    </form>
  )
}

export default RegisterForm
