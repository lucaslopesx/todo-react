import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";

import './global.css'
import styles from './App.module.css'
import { Todo } from "./components/Todo";

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <main>
          <Todo/>
        </main>
      </div>
    </div>
  )
}

export default App
