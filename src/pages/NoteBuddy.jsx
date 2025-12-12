import styles from './NoteBuddy.module.css'

function NoteBuddy() {
  return (
    <section className={styles.notebuddy}>
      <div className={styles.container}>
        <p className={styles.label}>Music Learning</p>
        <h1>NoteBuddy</h1>
        <p className={styles.tagline}>Piano fundamentals that build real musicianship.</p>
        <div className={styles.status}>
          <span>In Development</span>
        </div>
        <p className={styles.description}>
          Pattern recognition meets play. NoteBuddy teaches piano fundamentals 
          the way kids actually learn — through discovery, not drilling.
        </p>
        <p className={styles.cta}>
          Want early access? Check back soon or follow along on TikTok.
        </p>
      </div>
    </section>
  )
}

export default NoteBuddy
