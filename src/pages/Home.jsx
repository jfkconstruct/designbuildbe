import CraftScene from '../components/CraftScene'
import ProductCard from '../components/ProductCard'
import styles from './Home.module.css'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>A Learning Studio</p>
          <h1 className={styles.heroTitle}>
            We build learning tools that treat kids like{' '}
            <span>capable humans</span>.
          </h1>
          <p className={styles.heroDescription}>
            We believe kids don't need to wait until they're older to build, create, make. 
            Our tools respect their intelligence and spark genuine capability.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <CraftScene />
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className={styles.philosophy}>
        <div className={styles.philosophyGrid}>
          <div>
            <p className={styles.sectionLabel}>Our Philosophy</p>
            <h2>The sequence matters.</h2>
          </div>
          <div className={styles.philosophyItems}>
            <div className={`${styles.philosophyItem} ${styles.design}`}>
              <span className={styles.itemLabel}>Design</span>
              <p>Envision who you want to become. Not someday — now. The identity comes first, then the structure that supports it.</p>
            </div>
            <div className={`${styles.philosophyItem} ${styles.build}`}>
              <span className={styles.itemLabel}>Build</span>
              <p>Create the systems that make your vision inevitable. Tools aren't just useful — they're shields that protect your future self.</p>
            </div>
            <div className={`${styles.philosophyItem} ${styles.be}`}>
              <span className={styles.itemLabel}>Be</span>
              <p>Stop preparing. Start embodying. You don't need permission to become who you're designing yourself to be.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={styles.products}>
        <div className={styles.productsContainer}>
          <div className={styles.productsHeader}>
            <div>
              <p className={styles.sectionLabel}>What We Make</p>
              <h2>Learning tools with intention</h2>
            </div>
            <p className={styles.productsIntro}>
              Each product is built to develop real capability — not just pass time.
            </p>
          </div>
          <div className={styles.productsGrid}>
            <ProductCard
              name="NoteBuddy"
              category="Music Learning"
              description="Piano fundamentals that build real musicianship. Pattern recognition meets play."
              status="In Development"
              accent="terra"
            />
            <ProductCard
              name="Coming Soon"
              category="Math Foundations"
              description="Multiplication mastery through understanding, not memorization."
              status="In Design"
              accent="sage"
            />
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className={styles.forParents}>
        <div className={styles.forParentsContent}>
          <p className={styles.sectionLabel}>For Parents & Educators</p>
          <h2>You're not looking for another app to keep them busy. You're looking for tools that build something real.</h2>
          <p>We design for the adults who believe in their kids' capacity to create, think, and build — and want tools that match that belief.</p>
        </div>
      </section>
    </>
  )
}

export default Home
