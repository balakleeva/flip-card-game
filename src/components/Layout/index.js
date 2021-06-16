import styles from './styles.module.css'

export const Layout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>{children}</div>
  </div>
)
