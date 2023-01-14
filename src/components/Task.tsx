import { Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

interface TaskProps {
  isCompleted: boolean,
  content: string
}

export function Task({ isCompleted, content }: TaskProps) {

  const checked = "src/assets/check.svg"
  const unchecked = "src/assets/uncheck.svg"

  const [ isChecked, setIsChecked ] = useState(isCompleted);

  function handleCheckClick() {
    setIsChecked(!isChecked);
    console.log(isChecked)
  }


  return (
    <div className={styles.task}>
      <div>
        <img src={ isChecked ? checked : unchecked } alt="" onClick={handleCheckClick}/>
      </div>
      <p>
        {content}
      </p>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  )
}