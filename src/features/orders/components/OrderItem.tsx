import type { FC } from 'react'
import type { Order } from '../model/types'

export interface OrderItemProps {
  order: Order
}

export const OrderItem: FC<OrderItemProps> = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-item-header">
        <span>Замовлення №{order.id.slice(0, 8)}</span>
        <span>{new Date(order.createdAt).toLocaleString()}</span>
      </div>
      <ul className="order-item-products">
        {order.items.map((item) => (
          <li key={item.productId}>
            {item.title} × {item.quantity} — ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="order-item-total">Разом: ${order.total.toFixed(2)}</p>
    </div>
  )
}
