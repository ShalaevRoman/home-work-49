import type { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import {
  CartPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  OrdersPage,
  ProductDetailPage,
  ProductsPage,
  RegisterPage,
} from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
import { ROUTES } from './paths'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.products, element: <ProductsPage /> },
      { path: ROUTES.productDetail, element: <ProductDetailPage /> },
      { path: ROUTES.cart, element: <CartPage /> },
      {
        path: ROUTES.checkout,
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.orders,
        element: (
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        ),
      },
      { path: ROUTES.login, element: <LoginPage /> },
      { path: ROUTES.register, element: <RegisterPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export const AppRouter: FC = () => <RouterProvider router={router} />
