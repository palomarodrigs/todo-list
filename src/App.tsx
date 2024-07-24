import './App.css'
import { Counter } from './components/counter'

import { Header } from './components/header'
import { NewTask } from './components/newTask'

function App() {
  return (
    <main>
      <Header />

      <section>
        <NewTask />

        <div className="info">
          <div className="created-tasks">
            <p>Tarefas criadas</p>

            <Counter count={0} />
          </div>

          <div className="concluded-tasks">
            <p>Concluídas</p>

            <Counter count={0} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
