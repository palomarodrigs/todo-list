import styles from './newTask.module.css'

import Plus from '../assets/plus.svg'

export function NewTask() {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Adicione uma tarefa" />

      <button>
        <p>Criar</p>
        <img src={Plus} />
      </button>
    </div>
  )
}
