import { AxiosError, AxiosResponse } from 'axios'
import {ResponseError} from "../../api/types";

export const errorResponseHandler = (error: AxiosError<ResponseError>): AxiosError => {
  return error
}

export const successResponseHandler = (response: AxiosResponse): AxiosResponse => {
  return response
}
