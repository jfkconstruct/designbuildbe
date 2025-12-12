import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <span className={styles.design}>Design</span>
        <span className={styles.dot}>.</span>
        <span className={styles.build}>Build</span>
        <span className={styles.dot}>.</span>
        <span className={styles.be}>Be</span>
      </Link>
      <div className={styles.links}>
        <button onClick={() => scrollToSection('philosophy')} className={styles.link}>What We Believe</button>
        <button onClick={() => scrollToSection('products')} className={styles.link}>Products</button>
        <NavLink to="/about" className={styles.link}>About</NavLink>
      </div>
    </nav>
  )
}

export default Nav
