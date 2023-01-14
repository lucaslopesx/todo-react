import { TaskInput } from './TaskInput'
import { TaskList } from './TaskList'
import styles from './Todo.module.css'

export function Todo() {
  return (
    <article>
      <TaskInput/>
      <TaskList></TaskList>
    </article>
  )
}