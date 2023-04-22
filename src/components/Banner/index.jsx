import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from '../../assets/img/circulo_colorido.png'
import minhaFoto from '../../assets/img/minha_foto.png'
export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá, mundo!</h1>
            <p className={styles.paragrafo}>Olá, meu nome é Sandro, tenho 19 anos e curso Análise e Desenvolvimento de Sistemas. Aqui compatilho meus projetos !</p>
        </div>
        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} alt="Circulo Colorido" aria-hidden={true} />
            <img className={styles.minhaFoto} src={minhaFoto} alt="Sandro sorrindo" />
        </div>
    </div>
  )
}
