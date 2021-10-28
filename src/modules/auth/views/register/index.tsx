import styles from './register.module.scss'

import RegisterForm from '@/modules/auth/components/register-form'

const Login = () => (
  <main className={styles.container}>
    <RegisterForm />
  </main>
)

export default Login
