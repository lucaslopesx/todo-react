import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <div>
      <header className={styles.header}>
        <p>Tarefas criadas <strong>5</strong></p>
        <p>Concluídas <strong>2 de 5</strong></p>
      </header>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </div>
  )
}