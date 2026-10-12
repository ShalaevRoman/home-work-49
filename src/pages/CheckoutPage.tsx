import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { clearCart, createOrder, getCartTotal } from '../features'
import { ROUTES } from '../routes/paths'

export const CheckoutPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const items = useAppSelector((state) => state.cart.items)
  const total = getCartTotal(items)

  const handleConfirm = async () => {
    const result = await dispatch(createOrder({ items, total }))
    if (!('error' in result)) {
      dispatch(clearCart())
      navigate(ROUTES.orders)
    }
  }

  if (items.length === 0) {
    return (
      <section className="checkout-page">
        <h1>Оформлення замовлення</h1>
        <p className="empty-state">Кошик порожній, немає що оформлювати</p>
      </section>
    )
  }

  return (
    <section className="checkout-page">
      <h1>Оформлення замовлення</h1>
      <ul className="checkout-items">
        {items.map((item) => (
          <li key={item.productId}>
            {item.title} × {item.quantity} — ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="checkout-total">Разом: ${total.toFixed(2)}</p>
      <Button type="button" onClick={handleConfirm}>
        Підтвердити замовлення
      </Button>
    </section>
  )
}
