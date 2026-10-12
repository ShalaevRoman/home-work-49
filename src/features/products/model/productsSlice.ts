import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  fetchCategoriesRequest,
  fetchProductByIdRequest,
  fetchProductsRequest,
} from '../api/productsApi'
import type { Product, ProductsState } from './types'

const initialState: ProductsState = {
  items: [],
  categories: [],
  selectedCategory: null,
  currentProduct: null,
  status: 'idle',
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category: string | null | undefined) => fetchProductsRequest(category),
)

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: number) => fetchProductByIdRequest(id),
)

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => fetchCategoriesRequest(),
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload
    },
    clearCurrentProduct(state) {
      state.currentProduct = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to load products'
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.status = 'succeeded'
        state.currentProduct = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to load product'
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.categories = action.payload
      })
  },
})

export const { setSelectedCategory, clearCurrentProduct } = productsSlice.actions
export default productsSlice.reducer
