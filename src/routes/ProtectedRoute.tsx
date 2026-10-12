import type { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { ROUTES } from './paths'

export const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const user = useAppSelector((state) => state.auth.user)
  if (!user) return <Navigate to={ROUTES.login} replace />
  return <>{children}</>
}
