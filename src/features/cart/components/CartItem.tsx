import type { FC } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { decrementQuantity, incrementQuantity, removeItem } from '../model/cartSlice'
import type { CartItem as CartItemType } from '../model/types'

export interface CartItemProps {
  item: CartItemType
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button type="button" onClick={() => dispatch(decrementQuantity(item.productId))}>
          −
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => dispatch(incrementQuantity(item.productId))}>
          +
        </button>
      </div>
      <p className="cart-item-subtotal">${(item.price * item.quantity).toFixed(2)}</p>
      <button
        type="button"
        className="cart-item-remove"
        onClick={() => dispatch(removeItem(item.productId))}
      >
        Видалити
      </button>
    </div>
  )
}
