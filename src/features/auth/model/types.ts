export interface AuthUser {
  id: string
  name: string
  email: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData extends LoginCredentials {
  name: string
}

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface AuthState {
  user: AuthUser | null
  status: RequestStatus
  error: string | null
}
