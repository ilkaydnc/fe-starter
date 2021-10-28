import Head from 'next/head'

import Register from '@/modules/auth/views/register'

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Create an account</title>
      </Head>
      <Register />
    </>
  )
}

export default RegisterPage
