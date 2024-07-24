import styles from './counter.module.css'

interface CounterProps {
  children: React.ReactNode
}

export function Counter({ children }: CounterProps) {
  return <div className={styles.counter}>{children}</div>
}
