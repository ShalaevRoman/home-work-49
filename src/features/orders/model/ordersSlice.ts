import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { CartItem } from '../../cart/model/types'
import { createOrderRequest, fetchOrdersRequest } from '../api/ordersApi'
import type { OrdersState } from './types'

const initialState: OrdersState = {
  items: [],
  status: 'idle',
  error: null,
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () =>
  fetchOrdersRequest(),
)

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async ({ items, total }: { items: CartItem[]; total: number }) =>
    createOrderRequest(items, total),
)

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Не вдалося завантажити замовлення'
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.items.unshift(action.payload)
      })
  },
})

export default ordersSlice.reducer
