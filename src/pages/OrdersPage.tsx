import { useEffect, type FC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { OrderItem, fetchOrders } from '../features'

export const OrdersPage: FC = () => {
  const dispatch = useAppDispatch()
  const { items, status, error } = useAppSelector((state) => state.orders)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  return (
    <section className="orders-page">
      <h1>Мої замовлення</h1>
      {status === 'loading' && <p>Завантаження...</p>}
      {status === 'failed' && <p className="form-error">{error}</p>}
      {status === 'succeeded' && items.length === 0 && (
        <p className="empty-state">Замовлень ще немає</p>
      )}
      <div className="orders-list">
        {items.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </section>
  )
}
