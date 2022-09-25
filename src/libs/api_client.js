import Axios from 'axios'
import Auth from './auth'

const axios = Axios.create({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

axios.interceptors.request.use(async request => {
  const token = await Auth.getToken()
  if (!token) return request
  request.headers['x-auth-token'] = token
  return request
})

axios.interceptors.response.use(
  res => {
    return Promise.resolve(res.data)
  },
  error => {
    console.error(error?.response?.data || error)
    const data = error?.response?.data || {code: '0000', message: 'エラーが発生しました。サイトを再読み込みしてください。'}
    return Promise.reject(data)
  }
)

export default axios
