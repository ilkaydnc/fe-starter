import App from 'next/app'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import type { AppContext, AppProps } from 'next/app'

import store from '@/app/store'
import Header from '@/components/header'
import translations from '@/i18n/translations'

import '@/styles/globals.scss'

interface MyAppProps extends AppProps {
  data: any
}

function MyApp({ Component, pageProps, router, data }: MyAppProps) {
  return (
    <IntlProvider
      messages={data}
      locale={router.locale as string}
      defaultLocale={router.defaultLocale}
    >
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </IntlProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  const { locale } = appContext.ctx

  return {
    ...appProps,
    data: translations[locale as keyof typeof translations],
  }
}

export default MyApp
