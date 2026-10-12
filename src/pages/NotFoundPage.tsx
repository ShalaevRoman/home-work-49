import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'

export const NotFoundPage: FC = () => {
  return (
    <section className="not-found-page">
      <h1>404</h1>
      <p>Сторінку не знайдено</p>
      <Link to={ROUTES.home}>На головну</Link>
    </section>
  )
}
