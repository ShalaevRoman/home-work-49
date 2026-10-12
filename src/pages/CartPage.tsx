import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { CartItemRow, clearCart, getCartTotal } from '../features'
import { ROUTES } from '../routes/paths'

export const CartPage: FC = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)
  const total = getCartTotal(items)

  if (items.length === 0) {
    return (
      <section className="cart-page">
        <h1>Кошик</h1>
        <p className="empty-state">Кошик порожній</p>
        <Link to={ROUTES.products} className="btn btn-primary">
          До товарів
        </Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <h1>Кошик</h1>
      <div className="cart-items">
        {items.map((item) => (
          <CartItemRow key={item.productId} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Разом: ${total.toFixed(2)}</p>
        <Button type="button" variant="secondary" onClick={() => dispatch(clearCart())}>
          Очистити кошик
        </Button>
        <Link to={ROUTES.checkout} className="btn btn-primary">
          Оформити замовлення
        </Link>
      </div>
    </section>
  )
}
