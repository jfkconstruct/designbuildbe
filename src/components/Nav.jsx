import { Link, NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
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
        <NavLink to="/#philosophy" className={styles.link}>Philosophy</NavLink>
        <NavLink to="/#products" className={styles.link}>Products</NavLink>
        <NavLink to="/about" className={styles.link}>About</NavLink>
      </div>
    </nav>
  )
}

export default Nav
