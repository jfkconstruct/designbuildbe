import styles from './ProductCard.module.css'

function ProductCard({ name, category, description, status, accent = 'terra' }) {
  return (
    <div className={`${styles.card} ${styles[accent]}`}>
      <span className={styles.category}>{category}</span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.status}>{status}</span>
    </div>
  )
}

export default ProductCard
