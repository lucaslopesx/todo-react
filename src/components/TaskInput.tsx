import styles from './TaskInput.module.css'

export function TaskInput() {
  return (
    <div className={styles.taskInputContainer}>
      <input type="text" />
      <button>Criar</button>
    </div>
  )  
}