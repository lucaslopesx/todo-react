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
    const tasksReordered = reorderTasksWhenChecked(id, tasksUpdated)
    localStorage.setItem('tasks', JSON.stringify(tasksReordered))  
    setTasks(tasksReordered)
  }

  function reorderTasksWhenChecked(id: string, tasks: Task[]) {
    const taskIndex = tasks.findIndex(task => task.id === id)
    const task = tasks.splice(taskIndex, 1)
    const taskIndexWhenIsCompleted = () => (tasks.findIndex(x => x.isCompleted == true))
    const latestCheckedTaskIndex = taskIndexWhenIsCompleted() == -1 ? tasks.length : taskIndexWhenIsCompleted()
    tasks.splice(latestCheckedTaskIndex, 0, task[0])
    return tasks
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