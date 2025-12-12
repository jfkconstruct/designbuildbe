import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        
        <div className={styles.block}>
          <p className={styles.label}>Who We Are</p>
          <p className={styles.text}>
            We're parents first. We build learning tools because we couldn't find ones we actually wanted our kids to use.
          </p>
          <p className={styles.text}>
            Design.Build.Be is a small studio with a big belief: kids are more capable, more creative, and more ready than most apps give them credit for.
          </p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>What We Noticed</p>
          <p className={styles.text}>
            Most kids apps are slop. Flashy colors, cheap rewards, endless loops designed to hold attention rather than build anything real. They treat kids like problems to be managed, not people to be developed.
          </p>
          <p className={styles.text}>
            We looked at what was out there and thought: our kids deserve better than this.
          </p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>What We're Building</p>
          <p className={styles.text}>
            Tools that respect kids' intelligence. Apps that teach them to rise to a challenge, not just tap through it. Learning experiences that build critical thinking, self-reflection, and the kind of presence that carries into everything else they do.
          </p>
          <p className={styles.text}>
            We're not trying to entertain kids. We're trying to equip them.
          </p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Why It's Personal</p>
          <p className={styles.text}>
            This isn't theory for us. What we've learned from our own kids, from the ones we coach, from every classroom and dojo session: kids are endlessly fascinating. And what we've seen is that they rise when you actually expect them to.
          </p>
          <p className={styles.text}>
            They surprise you when you pay attention. They need presence more than products. But when a product is built with presence in mind, it becomes something different entirely.
          </p>
          <p className={styles.text}>
            That's what we're trying to make.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
