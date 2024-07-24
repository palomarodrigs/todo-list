import './App.css'

import { useState, useEffect } from 'react'

import { Header } from './components/header'
import { NewTask } from './components/newTask'
import { Counter } from './components/counter'

interface ITask {
  id: number
  content: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const handleAddNewTask = (content: string) => {
    const newTask: ITask = {
      id: Date.now(),
      content,
      isChecked: false,
    }

    localStorage.setItem('@todo:tasks', JSON.stringify([...tasks, newTask]))
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem('@todo:tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  return (
    <main>
      <Header />

      <section>
        <NewTask onAddNewTask={handleAddNewTask} />

        <div className="info">
          <div className="created-tasks">
            <p>Tarefas criadas</p>

            <Counter count={tasks.length} />
          </div>

          <div className="concluded-tasks">
            <p>Concluídas</p>

            <Counter count={tasks.filter((task) => task.isChecked).length} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
