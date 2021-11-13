import React from 'react'
import cs from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './language-switch.module.scss'

const LanguageSwitch = () => {
  const { locale, locales, asPath } = useRouter()

  return (
    <div className={styles.container}>
      {locales?.map(l => (
        <Link key={l} href={asPath} locale={l} passHref>
          <a className={cs(styles.item, l === locale && styles.active)}>
            {l.toLocaleUpperCase()}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitch
