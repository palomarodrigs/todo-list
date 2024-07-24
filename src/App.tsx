import './App.css'

import { useState, useEffect } from 'react'

import { Header } from './components/header'
import { NewTask } from './components/newTask'
import { Counter } from './components/counter'
import { Empty } from './components/empty'
import { Task } from './components/task'

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

  const handleDeleteTask = (id: number) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id)
    setTasks(tasksWithoutDeletedOne)
    localStorage.setItem('@todo:tasks', JSON.stringify(tasksWithoutDeletedOne))
  }

  const handleToggleTask = (id: number) => {
    const markTaskAsChecked = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task,
    )
    setTasks(markTaskAsChecked)
    localStorage.setItem('@todo:tasks', JSON.stringify(markTaskAsChecked))
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

        <div className={`task-list ${tasks.length === 0 ? 'no-scroll' : ''}`}>
          {tasks.length === 0 ? (
            <Empty />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                content={task.content}
                isChecked={task.isChecked}
                onDelete={() => handleDeleteTask(task.id)}
                onToggle={() => handleToggleTask(task.id)}
              />
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default App
