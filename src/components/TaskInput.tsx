import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, Dispatch, FormEvent, InvalidEvent, SetStateAction, useState } from 'react'
import styles from './TaskInput.module.css'
import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid'

interface TaskInputProps {
  setTasks: Dispatch<SetStateAction<Task[]>>
  tasks: Task[]
}

export function TaskInput({ setTasks, tasks }: TaskInputProps) {

  const [ newTask, setNewTask ] = useState<string>('')

  const isNewTaskEmpty = newTask.length === 0 

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    setTasks([...tasks, { 
      content: newTask || '', 
      id: uuidv4(), 
      isCompleted: false 
    }])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }



  return (
    <form className={styles.taskInputContainer} onSubmit={handleCreateNewTask}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        value={newTask}
        required
      />
      <button 
        type='submit'
        disabled={isNewTaskEmpty}  
      >
        <strong>Criar</strong>
        <PlusCircle size={20}/>
      </button>
    </form>
  )  
}