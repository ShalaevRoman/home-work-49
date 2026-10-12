import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getCartItemsCount, logout } from '../features'
import { ROUTES } from '../routes/paths'

export const Header: FC = () => {
  const dispatch = useAppDispatch()
  const cartCount = useAppSelector((state) => getCartItemsCount(state.cart.items))
  const user = useAppSelector((state) => state.auth.user)

  return (
    <header className="site-header">
      <NavLink to={ROUTES.home} className="logo">
        ShopKit
      </NavLink>
      <nav className="main-nav">
        <NavLink to={ROUTES.home}>Головна</NavLink>
        <NavLink to={ROUTES.products}>Товари</NavLink>
        <NavLink to={ROUTES.orders}>Замовлення</NavLink>
        <NavLink to={ROUTES.cart}>Кошик{cartCount > 0 && ` (${cartCount})`}</NavLink>
      </nav>
      <div className="auth-area">
        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <button type="button" onClick={() => dispatch(logout())}>
              Вийти
            </button>
          </>
        ) : (
          <>
            <NavLink to={ROUTES.login}>Увійти</NavLink>
            <NavLink to={ROUTES.register}>Реєстрація</NavLink>
          </>
        )}
      </div>
    </header>
  )
}
