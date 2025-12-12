import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <Link to="/" className={styles.logo}>
            <span className={styles.design}>Design</span>
            <span className={styles.dot}>.</span>
            <span className={styles.build}>Build</span>
            <span className={styles.dot}>.</span>
            <span className={styles.be}>Be</span>
          </Link>
          <p className={styles.tagline}>Learning tools for capable humans.</p>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Design.Build.Be
        </div>
      </div>
    </footer>
  )
}

export default Footer
