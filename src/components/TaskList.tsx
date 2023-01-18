import { Task } from './Task'
import styles from './TaskList.module.css'
import { v4 as uuidv4 } from 'uuid'
import { Empty } from './Empty'



interface TaskListProps {
  tasks: Task[],
  onCheck: (id: string) => void,
  onDelete: (id: string) => void
}

export function TaskList({ tasks, onCheck, onDelete }: TaskListProps) {
  function handleTaskCheck(id: string) {
    onCheck(id)
  }

  function handleTaskDelete(id: string) {
    onDelete(id)
  }

  let tasksCompleted = tasks.filter((task) => task.isCompleted == true)
  let tasksCompletedCount = tasksCompleted.length

  return (
    <div>
      <header className={styles.header}>
        <p>Tarefas criadas <strong>{tasks.length}</strong></p>
        <p>Concluídas <strong>{tasksCompletedCount} de {tasks.length}</strong></p>
      </header>
      {/* <Empty/> */}
      {tasks.length === 0 ? 
        ( 
          <Empty/> 
        ) : (
          tasks.map(task => {
            return <Task
              key={task.id}
              id={task.id}
              isCompleted={task.isCompleted}
              content={task.content}
              onCheck={handleTaskCheck}
              onDelete={handleTaskDelete}
            />
          })
        )
      }
    </div>
  )
}