import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthForm } from '../features'
import { ROUTES } from '../routes/paths'

export const RegisterPage: FC = () => {
  const navigate = useNavigate()
  return (
    <section className="auth-page">
      <h1>Реєстрація</h1>
      <AuthForm mode="register" onSuccess={() => navigate(ROUTES.home)} />
    </section>
  )
}
