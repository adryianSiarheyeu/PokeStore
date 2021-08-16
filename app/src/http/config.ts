import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { LocalStorageService } from '../services/localStorageService'

const BASE_URL: string = 'https://demo-api.it-shatle.by/'

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {},
}

const api: AxiosInstance = axios.create(config)

api.interceptors.request.use((settings: AxiosRequestConfig) => {
  const token = LocalStorageService.getUserToken()

  if (token) {
    settings.headers['Authorization'] = `Bearer ${token}`
  }

  return settings
})

export default api
