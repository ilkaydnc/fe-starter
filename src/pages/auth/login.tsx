import Head from 'next/head'

import Login from '@/modules/auth/views/login'

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login to your account</title>
      </Head>
      <Login />
    </>
  )
}

export default LoginPage
