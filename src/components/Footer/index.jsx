import React from 'react'
import styles from './Footer.module.css'

import MarcaRegistrada from '../../assets/img/marca_registrada.svg'

export default function Footer() {
  return (
    <footer className={styles.rodape}>
        <img src={MarcaRegistrada} alt="Svg da marca" />
    </footer>
  )
}
