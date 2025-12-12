import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <p className={styles.label}>About</p>
        <h1>The story behind Design.Build.Be</h1>
        <p className={styles.intro}>
          Coming soon — the philosophy, the founder, and why we believe kids don't need permission to create.
        </p>
      </div>
    </section>
  )
}

export default About
