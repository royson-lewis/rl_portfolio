import axios, { AxiosError, AxiosResponse } from 'axios'

import { errorResponseHandler, successResponseHandler } from '../lib/api/ResponseHandler'
import { ResponseError } from './types'
import accessTokenHandler from '../lib/api/TokenHandlers'

const MainAPIHost = process.env.NEXT_PUBLIC_API_MAIN

const MainAPIClient = axios.create({
  baseURL: MainAPIHost,
})

MainAPIClient.interceptors.request.use((request) => {
  accessTokenHandler(request)
  return request
})

MainAPIClient.interceptors.response.use(
  (response: AxiosResponse) => {
    successResponseHandler(response)
    return Promise.resolve(response)
  },
  (error: AxiosError<ResponseError>) => {
    errorResponseHandler(error)
    return Promise.reject(error)
  },
)

export default MainAPIClient
