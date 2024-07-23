import styles from './header.module.css'

import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.headerContent}>
      <img src={Logo} alt="Logo Rocket" />
    </header>
  )
}
