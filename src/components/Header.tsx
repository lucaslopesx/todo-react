import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/assets/rocket.svg"/>
      <strong>
        to
      </strong>
      <strong>
        do
      </strong>
    </header>
  )
}