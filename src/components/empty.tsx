import styles from './empty.module.css'

import Clipboard from '../assets/clipboard.svg'

export function Empty() {
  return (
    <main className={styles.emptyContent}>
      <img src={Clipboard} />

      <div className={styles.emptyTasks}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </main>
  )
}
