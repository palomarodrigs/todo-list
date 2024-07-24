import styles from './counter.module.css'

interface CounterProps {
  count: number
}

export function Counter({ count }: CounterProps) {
  return <div className={styles.counter}>{count}</div>
}
