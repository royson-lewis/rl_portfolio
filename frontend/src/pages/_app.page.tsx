import '../view/layout/styles/globals/_style.scss'

import { ReactElement, ReactNode } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { SSRProvider } from 'react-bootstrap'
import { Provider } from 'react-redux'

import LayoutMain from '../view/layout/main'
import store from '../config/store/reducers'
import PageLoadProvider from '../config/page-load/provider'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => (
  <SSRProvider>
    <Provider store={store}>
      <LayoutMain>
        <Head>
          <title>Royson Lewis | Portfolio</title>
        </Head>
        <PageLoadProvider>
          <Component {...pageProps} />
        </PageLoadProvider>
      </LayoutMain>
    </Provider>
  </SSRProvider>
)

export type RootState = ReturnType<typeof store.getState>

export default MyApp
