import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.label}>About</p>
          <h1>Who We Are</h1>
          <p className={styles.intro}>
            We're parents first. We build learning tools because we couldn't find ones we actually wanted our kids to use.
          </p>
          <p className={styles.intro}>
            Design.Build.Be is a small studio with a big belief: kids are more capable, more creative, and more ready than most apps give them credit for.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>What We Noticed</h2>
          <p>
            Most kids apps are slop. Flashy colors, cheap rewards, endless loops designed to hold attention rather than build anything real. They treat kids like problems to be managed, not people to be developed.
          </p>
          <p>
            We looked at what was out there and thought: our kids deserve better than this.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>What We're Building</h2>
          <p>
            Tools that respect kids' intelligence. Apps that teach them to rise to a challenge, not just tap through it. Learning experiences that build critical thinking, self-reflection, and the kind of presence that carries into everything else they do.
          </p>
          <p>
            We're not trying to entertain kids. We're trying to equip them.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Why It's Personal</h2>
          <p>
            This isn't theory for us. What we've learned from our own kids, from the ones we coach, from every classroom and dojo session: kids are endlessly fascinating. And what we've seen is that they rise when you actually expect them to.
          </p>
          <p>
            They surprise you when you pay attention. They need presence more than products. But when a product is built with presence in mind, it becomes something different entirely.
          </p>
          <p className={styles.closing}>
            That's what we're trying to make.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
