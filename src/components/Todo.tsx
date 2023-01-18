import { useState } from 'react'
import { Task } from './Task'
import { TaskInput } from './TaskInput'
import { TaskList } from './TaskList'
import styles from './Todo.module.css'

export function Todo() {

  const [ tasks, setTasks ] = useState<Task[]>([])


  function handleTaskCheck(id: string) {
    const tasksUpdated = tasks.map(task => {
      if(task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    }) 

    setTasks(tasksUpdated)
  }

  function handleTaskDelete(id: string) {
    const tasksUpdated = tasks.filter(task => task.id !== id)
    setTasks(tasksUpdated)
  }


  return (
    <article>
      <TaskInput setTasks={setTasks} tasks={tasks}/>
      <TaskList tasks={tasks} onCheck={handleTaskCheck} onDelete={handleTaskDelete}></TaskList>
    </article>
  )
}