import styles from './styles.module.css'

export const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  )
}
