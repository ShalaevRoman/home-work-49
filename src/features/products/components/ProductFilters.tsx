import type { FC } from 'react'

export interface ProductFiltersProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export const ProductFilters: FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="product-filters">
      <button
        type="button"
        className={selectedCategory === null ? 'active' : ''}
        onClick={() => onSelectCategory(null)}
      >
        Усі
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
