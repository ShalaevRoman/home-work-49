import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'

export const HomePage: FC = () => {
  return (
    <section className="home-hero">
      <h1>Ласкаво просимо до ShopKit</h1>
      <p>Курсовий проєкт з React та Redux Toolkit — демонстраційний інтернет-магазин.</p>
      <Link to={ROUTES.products} className="btn btn-primary">
        Переглянути товари
      </Link>
    </section>
  )
}
