export type ResponseError = {
  success: boolean
  message: string | Record<string, string>
  data: Array<unknown>
}
