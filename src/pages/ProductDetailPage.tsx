import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../components'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addItem, clearCurrentProduct, fetchProductById } from '../features'

export const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const { currentProduct, status, error } = useAppSelector((state) => state.products)

  useEffect(() => {
    if (id) dispatch(fetchProductById(Number(id)))
    return () => {
      dispatch(clearCurrentProduct())
    }
  }, [dispatch, id])

  if (status === 'loading' || !currentProduct) return <p>Завантаження...</p>
  if (status === 'failed') return <p className="form-error">{error}</p>

  return (
    <section className="product-detail">
      <img src={currentProduct.image} alt={currentProduct.title} />
      <div className="product-detail-info">
        <h1>{currentProduct.title}</h1>
        <p className="product-detail-category">{currentProduct.category}</p>
        <p className="product-detail-description">{currentProduct.description}</p>
        <p className="product-detail-price">${currentProduct.price.toFixed(2)}</p>
        <Button
          type="button"
          onClick={() =>
            dispatch(
              addItem({
                productId: currentProduct.id,
                title: currentProduct.title,
                price: currentProduct.price,
                image: currentProduct.image,
              }),
            )
          }
        >
          Додати в кошик
        </Button>
      </div>
    </section>
  )
}
