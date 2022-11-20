import '../view/layout/styles/globals/_style.scss'

import { AppProps } from 'next/app'
import Head from 'next/head'

import LayoutMain from "../view/layout/main/Index";
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import store from "../config/store/reducers";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <>
      <Head>
        <title>Royson Lewis | Portfolio</title>
      </Head>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </>
  )
}

export type RootState = ReturnType<typeof store.getState>

export default MyApp
