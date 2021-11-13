import LanguageSwitch from '@/components/language-switch'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <LanguageSwitch />
    </header>
  )
}

export default Header
