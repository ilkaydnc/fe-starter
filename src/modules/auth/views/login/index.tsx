import styles from './login.module.scss'

import LoginForm from '@/modules/auth/components/login-form'

const Login = () => (
  <main className={styles.container}>
    <LoginForm />
  </main>
)

export default Login
