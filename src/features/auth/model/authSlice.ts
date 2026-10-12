import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loadFromStorage, removeFromStorage, saveToStorage } from '../../../services/storage/localStorage'
import { loginRequest, registerRequest } from '../api/authApi'
import type { AuthState, AuthUser, LoginCredentials, RegisterData } from './types'

const SESSION_STORAGE_KEY = 'auth_session'

const initialState: AuthState = {
  user: loadFromStorage<AuthUser>(SESSION_STORAGE_KEY) ?? null,
  status: 'idle',
  error: null,
}

export const login = createAsyncThunk('auth/login', async (credentials: LoginCredentials) =>
  loginRequest(credentials),
)

export const register = createAsyncThunk('auth/register', async (data: RegisterData) =>
  registerRequest(data),
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.error = null
      removeFromStorage(SESSION_STORAGE_KEY)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
        saveToStorage(SESSION_STORAGE_KEY, action.payload)
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Не вдалося увійти'
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
        saveToStorage(SESSION_STORAGE_KEY, action.payload)
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Не вдалося зареєструватись'
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
