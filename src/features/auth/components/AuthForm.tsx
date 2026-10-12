import { useState, type FC, type FormEvent } from 'react'
import { Button } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { login, register } from '../model/authSlice'

export interface AuthFormProps {
  mode: 'login' | 'register'
  onSuccess: () => void
}

export const AuthForm: FC<AuthFormProps> = ({ mode, onSuccess }) => {
  const dispatch = useAppDispatch()
  const { status, error } = useAppSelector((state) => state.auth)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const action =
      mode === 'login' ? login({ email, password }) : register({ name, email, password })
    const result = await dispatch(action)
    if (!('error' in result)) {
      onSuccess()
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {mode === 'register' && (
        <label>
          Ім'я
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      )}
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={4}
        />
      </label>
      {error && <p className="form-error">{error}</p>}
      <Button type="submit" disabled={status === 'loading'}>
        {mode === 'login' ? 'Увійти' : 'Зареєструватись'}
      </Button>
    </form>
  )
}
