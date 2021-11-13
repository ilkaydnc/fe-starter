import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import cs from 'classnames'

import { useAppSelector } from '@/hooks/redux'
import { setTheme } from '@/app/redux/appSlice'
import { THEMES } from '@/app/redux/types'

import styles from './theme-switch.module.scss'

const ThemeSwitch = () => {
  const dispatch = useDispatch()
  const { theme } = useAppSelector(state => state.app)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as THEMES
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    let currentTheme = savedTheme || (isDark ? THEMES.DARK : THEMES.LIGHT)

    dispatch(setTheme(currentTheme))

    localStorage.setItem('theme', currentTheme)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', theme)
  }, [theme])

  const changeTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT

    dispatch(setTheme(newTheme))

    localStorage.setItem('theme', newTheme)
  }

  return (
    <button className={cs(styles.button)} onClick={() => changeTheme()}>
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  )
}

export default ThemeSwitch
