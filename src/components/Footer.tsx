import type { FC } from 'react'

const currentYear = new Date().getFullYear()

export const Footer: FC = () => {
  return (
    <footer className="site-footer">
      <p>© {currentYear} ShopKit — курсовий проєкт React + Redux Toolkit</p>
    </footer>
  )
}
