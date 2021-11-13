import LanguageSwitch from '@/components/language-switch'
import ThemeSwitch from '../theme-switch'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <ThemeSwitch />
      <LanguageSwitch />
    </header>
  )
}

export default Header
