import axios from 'axios'

interface IParams {
  tmp1: any
  tmp2: any
}

const TMPAPI_BASE_URL = 'https://'

export const getApi = (params: IParams) =>
  axios.get<any>(`${TMPAPI_BASE_URL}`, {
    params: {
      ...params,
    },
  })
