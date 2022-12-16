import Cookies from 'js-cookie'
import { AxiosRequestConfig } from 'axios'

const accessTokenHandler = (request: AxiosRequestConfig): void => {
  const accessToken = Cookies.get('accessToken') as string
  request.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
}

export default accessTokenHandler
