import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import pageLoad from '../pageLoad/reducers'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    pageLoad,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
