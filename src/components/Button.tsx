import type { ButtonHTMLAttributes, FC } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', className = '', ...rest }) => {
  return <button className={`btn btn-${variant} ${className}`.trim()} {...rest} />
}
