import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Button, Input } from '@/components'

import styles from './login-form.module.scss'
import { login } from '../../redux/authSlice'
import { LoginActionPayload } from '../../redux/types'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { FormattedMessage, useIntl } from 'react-intl'

const LoginForm: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.auth)
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
      <h2 className={styles.title}>
        <FormattedMessage id="login-your-account" />
      </h2>
      <Input
        name="email"
        type="email"
        label={formatMessage({ id: 'email' })}
        placeholder={formatMessage({ id: 'email' })}
        onChange={updateInputValues}
        required
        disabled={loading}
      />
      <Input
        name="password"
        type="password"
        label={formatMessage({ id: 'password' })}
        placeholder={formatMessage({ id: 'password' })}
        onChange={updateInputValues}
        required
        disabled={loading}
      />
      <Link href="/auth/register" passHref>
        {formatMessage({ id: 'dont-have-an-account' })}
      </Link>
      {error && <div className={styles.error}>{error}</div>}
      <Button type="submit" block disabled={loading}>
        {loading
          ? formatMessage({ id: 'sending' })
          : formatMessage({ id: 'login' })}
      </Button>
    </form>
  )
}

export default LoginForm
