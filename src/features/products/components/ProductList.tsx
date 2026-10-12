import type { FC } from 'react'
import type { Product } from '../model/types'
import { ProductCard } from './ProductCard'

export interface ProductListProps {
  products: Product[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p className="empty-state">Товарів не знайдено</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
