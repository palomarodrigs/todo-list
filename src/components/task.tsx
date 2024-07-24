import styles from './task.module.css'

import { CheckboxButton } from './checkboxButton'
import { TrashButton } from './trashButton'

interface TaskProps {
  content: string
  isChecked: boolean
  onDelete: () => void
  onToggle: () => void
}

export function Task({ content, isChecked, onDelete, onToggle }: TaskProps) {
  const handleToggleCheckbox = () => {
    onToggle()
  }

  return (
    <div className={styles.taskContent}>
      <CheckboxButton checked={isChecked} onChange={handleToggleCheckbox} />

      <p className={`${styles.content} ${isChecked ? styles.checked : ''}`}>{content}</p>

      <TrashButton onDelete={onDelete} />
    </div>
  )
}
