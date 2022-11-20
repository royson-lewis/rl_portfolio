import '../view/layout/styles/globals/css/global.scss'
import { useState } from 'react'

import Router from 'next/router'
import { AppProps } from 'next/app'
import Head from 'next/head'

import FullscreenLoader from '../view/widgets/fullscreen-loader'
import Footer from '../view/layout/footer/footer'
import Header from '../view/layout/header/header'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })

  Router.events.on('routeChangeError', () => {
    setLoading(false)
  })

  return (
    <>
      <Head>
        <title>Royson Lewis | Portfolio</title>
      </Head>
      <section>
        <Header />
        {loading ? <FullscreenLoader /> : null}
        <Component {...pageProps} />
        <Footer />
      </section>
    </>
  )
}

export default MyApp
