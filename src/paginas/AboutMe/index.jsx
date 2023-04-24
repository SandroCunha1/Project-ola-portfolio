import React from 'react'
import PostModelo from '../../components/PostModelo'
import fotoCapa from '../../assets/img/sobre_mim_capa.png'
import fotoSobre from '../../assets/img/sobre_mim_foto.png'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
   
    <PostModelo 
    titulo="Sobre minha pessoa "
    fotoCapa={fotoCapa}
    >
      <h3 className={styles.subtitulo}>Opa, meu nome é Sandro !</h3>
      <img src={fotoSobre} alt="Foto minha " className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga magni ad iusto nostrum voluptas ipsam, adipisci numquam deleniti, laborum voluptatibus optio incidunt sapiente quae pariatur quidem voluptate molestias debitis! Temporibus.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga magni ad iusto nostrum voluptas ipsam, adipisci numquam deleniti, laborum voluptatibus optio incidunt sapiente quae pariatur quidem voluptate molestias debitis! Temporibus.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia a quidem sint voluptatibus dicta vitae maxime sequi tempora similique quo, hic ex! Sapiente vel at, consequatur eligendi id praesentium delectus soluta ut itaque nam ab quaerat modi vero blanditiis facilis corrupti, eveniet fuga numquam rerum culpa nulla totam nemo! Blanditiis animi dignissimos quam adipisci distinctio quibusdam accusantium obcaecati optio, quod porro sed expedita quia iste explicabo quas autem quaerat vitae quidem pariatur suscipit veritatis nulla fugit. Commodi cum consequatur ut libero perferendis veritatis repellendus eum voluptates ducimus earum eius error sapiente rerum, voluptatem maiores vero ad ab? Modi, illum in?
      </p>
    </PostModelo>
 
  )
}
