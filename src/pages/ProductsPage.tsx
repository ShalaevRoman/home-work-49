import { useEffect, type FC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  ProductFilters,
  ProductList,
  fetchCategories,
  fetchProducts,
  setSelectedCategory,
} from '../features'

export const ProductsPage: FC = () => {
  const dispatch = useAppDispatch()
  const { items, categories, selectedCategory, status, error } = useAppSelector(
    (state) => state.products,
  )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory))
  }, [dispatch, selectedCategory])

  return (
    <section className="products-page">
      <h1>Товари</h1>
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => dispatch(setSelectedCategory(category))}
      />
      {status === 'loading' && <p>Завантаження...</p>}
      {status === 'failed' && <p className="form-error">{error}</p>}
      {status === 'succeeded' && <ProductList products={items} />}
    </section>
  )
}
