import { Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

interface TaskProps {
  id: string
  isCompleted: boolean,
  content: string,
  onCheck: (id: string) => void,
  onDelete: (id: string) => void
}

export interface Task {
  id: string
  isCompleted: boolean
  content: string
}

export function Task({ id, isCompleted, content, onCheck, onDelete }: TaskProps) {

  const checked = "/assets/check.svg"
  const unchecked = "/assets/uncheck.svg"

  const [ isChecked, setIsChecked ] = useState(isCompleted);

  function handleCheckClick() {
    onCheck(id)
    setIsChecked(!isChecked);
  }

  function deleteTask() {
    onDelete(id)
  }


  return (
    <div className={styles.task}>
      <div>
        <img src={ isChecked ? checked : unchecked } alt="" onClick={handleCheckClick}/>
      </div>
      <p>
        {content}
      </p>
      <button onClick={deleteTask}>
        <Trash size={20}/>
      </button>
    </div>
  )
}