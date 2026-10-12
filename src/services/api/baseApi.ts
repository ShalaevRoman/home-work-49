import axios from 'axios'

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'https://fakestoreapi.com',
  timeout: 10000,
})
