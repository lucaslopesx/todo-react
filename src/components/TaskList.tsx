import { Task } from './Task'
import styles from './TaskList.module.css'
import { v4 as uuidv4 } from 'uuid'
import { Empty } from './Empty'

const Tasks = [
  {
    id: uuidv4(),
    isCompleted: false,
    content: 'Take out the trash'
  },
  {
    id: uuidv4(),
    isCompleted: true,
    content: 'Buy groceries'
  },
  {
    id: uuidv4(),
    isCompleted: false,
    content: 'Finish homework'
  }
]

export function TaskList() {
  return (
    <div>
      <header className={styles.header}>
        <p>Tarefas criadas <strong>5</strong></p>
        <p>Concluídas <strong>2 de 5</strong></p>
      </header>
      <Empty/>
      {/* {Tasks.map(task => {
        return <Task
          key={task.id}
          isCompleted={task.isCompleted}
          content={task.content}
        />
      })} */}
    </div>
  )
}