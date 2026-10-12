import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

export const MainLayout: FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
