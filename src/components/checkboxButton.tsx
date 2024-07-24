import { ChangeEvent } from 'react'
import styles from './checkboxButton.module.css'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function CheckboxButton({ checked, onChange }: CheckboxProps) {
  const handleChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChangeCheck}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxCustom}></span>
      </label>
    </div>
  )
}
