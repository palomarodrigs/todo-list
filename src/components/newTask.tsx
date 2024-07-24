import { useState } from 'react'
import styles from './newTask.module.css'

import Plus from '../assets/plus.svg'

interface NewTaskProps {
  onAddNewTask: (content: string) => void
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [inputValue, setInputValue] = useState('')

  const handleCreateTask = () => {
    if (inputValue.trim()) {
      onAddNewTask(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className={styles.newTaskButton} onClick={handleCreateTask}>
        <p>Criar</p>
        <img src={Plus} />
      </button>
    </div>
  )
}
