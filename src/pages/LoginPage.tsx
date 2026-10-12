import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthForm } from '../features'
import { ROUTES } from '../routes/paths'

export const LoginPage: FC = () => {
  const navigate = useNavigate()
  return (
    <section className="auth-page">
      <h1>Вхід</h1>
      <AuthForm mode="login" onSuccess={() => navigate(ROUTES.home)} />
    </section>
  )
}
