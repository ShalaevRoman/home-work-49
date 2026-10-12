export const ROUTES = {
  home: '/',
  products: '/products',
  productDetail: '/products/:id',
  cart: '/cart',
  checkout: '/checkout',
  login: '/login',
  register: '/register',
  orders: '/orders',
} as const

export function productDetailPath(id: number | string): string {
  return `/products/${id}`
}
