import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components'
import { useAppDispatch } from '../../../app/hooks'
import { addItem } from '../../cart'
import { productDetailPath } from '../../../routes/paths'
import type { Product } from '../model/types'

export interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="product-card">
      <Link to={productDetailPath(product.id)} className="product-card-link">
        <img src={product.image} alt={product.title} className="product-card-image" />
        <h3 className="product-card-title">{product.title}</h3>
      </Link>
      <p className="product-card-price">${product.price.toFixed(2)}</p>
      <Button
        type="button"
        onClick={() =>
          dispatch(
            addItem({
              productId: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            }),
          )
        }
      >
        Додати в кошик
      </Button>
    </div>
  )
}
