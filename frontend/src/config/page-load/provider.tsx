import React, { PropsWithChildren, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Router } from 'next/router'

import actionTypes from './actions'
import { RootState } from '../../pages/_app.page'

import LoaderMain from 'view/widgets/loader/main'

const PageLoadProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const dispatch = useDispatch()

  const { loading } = useSelector((state: RootState) => state.pageLoad)

  useEffect(() => {
    const start = () => {
      dispatch({ type: actionTypes.START_PAGE_LOAD })
    }
    const end = () => {
      dispatch({ type: actionTypes.END_PAGE_LOAD })
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [dispatch])

  return <LoaderMain loading={loading}>{children}</LoaderMain>
}

export default PageLoadProvider
