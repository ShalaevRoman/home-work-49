import { loadFromStorage, saveToStorage } from '../../../services/storage/localStorage'
import type { AuthUser, LoginCredentials, RegisterData } from '../model/types'

/**
 * Backend for auth is not available yet (planned later in the course), so this
 * simulates a server over localStorage with an artificial delay. The function
 * signatures mirror a real REST API so swapping to real HTTP calls later only
 * touches this file, not the slice or components.
 */
const USERS_STORAGE_KEY = 'auth_users_db'

interface StoredUser extends AuthUser {
  password: string
}

function delay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getStoredUsers(): StoredUser[] {
  return loadFromStorage<StoredUser[]>(USERS_STORAGE_KEY) ?? []
}

function toAuthUser(stored: StoredUser): AuthUser {
  return { id: stored.id, name: stored.name, email: stored.email }
}

export async function loginRequest(credentials: LoginCredentials): Promise<AuthUser> {
  await delay()
  const found = getStoredUsers().find(
    (user) => user.email === credentials.email && user.password === credentials.password,
  )
  if (!found) {
    throw new Error('Невірний email або пароль')
  }
  return toAuthUser(found)
}

export async function registerRequest(data: RegisterData): Promise<AuthUser> {
  await delay()
  const users = getStoredUsers()
  if (users.some((user) => user.email === data.email)) {
    throw new Error('Користувач з таким email вже існує')
  }
  const newUser: StoredUser = {
    id: crypto.randomUUID(),
    name: data.name,
    email: data.email,
    password: data.password,
  }
  saveToStorage(USERS_STORAGE_KEY, [...users, newUser])
  return toAuthUser(newUser)
}
