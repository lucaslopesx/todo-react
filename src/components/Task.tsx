import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <div>
        <img src="src/assets/check.svg" alt="" />
      </div>
      <p>
        Make an appointment with the dentist for a checkup and cleaning, and schedule it for next week.
        Make an appointment with the dentist for a checkup and cleaning, and schedule it for next week.
      </p>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  )
}