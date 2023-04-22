import React from 'react'
import styles from './Menu.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
  const location = useLocation();

  return (
    <header>
        <nav className={styles.navegacao}>
            <Link className={`${styles.link} 
            ${location.pathname === '/' ? styles.linkSub : ""}`
            } to='/'>
                Início
            </Link>
            <Link className={`${styles.link} 
            ${location.pathname === '/sobremim' ? styles.linkSub : ""}`
            } to='/sobremim'>
                Sobre mim
            </Link>
        </nav>
    </header>
  )
}
