import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <div className="texture-overlay" />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
