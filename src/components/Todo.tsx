import { useState } from 'react'
import { Task } from './Task'
import { TaskInput } from './TaskInput'
import { TaskList } from './TaskList'
import styles from './Todo.module.css'

export function Todo() {

  const currentTasks = localStorage.getItem('tasks') || '[]'

  const [ tasks, setTasks ] = useState<Task[]>(
    JSON.parse(currentTasks) || []
  )



  function handleTaskCheck(id: string) {
    const tasksUpdated = tasks.map(task => {
      if(task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    }) 
    localStorage.setItem('tasks', JSON.stringify(tasksUpdated))  
    setTasks(tasksUpdated)
  }

  function handleTaskDelete(id: string) {
    const tasksUpdated = tasks.filter(task => task.id !== id)
    setTasks(tasksUpdated)
    localStorage.setItem('tasks', JSON.stringify(tasksUpdated))  
  }


  return (
    <article>
      <TaskInput setTasks={setTasks}/>
      <TaskList tasks={tasks} onCheck={handleTaskCheck} onDelete={handleTaskDelete}></TaskList>
    </article>
  )
}