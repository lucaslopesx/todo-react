import { PlusCircle } from 'phosphor-react'
import styles from './TaskInput.module.css'

export function TaskInput() {
  return (
    <div className={styles.taskInputContainer}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button><strong>Criar</strong><PlusCircle size={20}/></button>
    </div>
  )  
}