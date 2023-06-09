import React from 'react'
import styles from './Post.module.css'
import { Link } from 'react-router-dom'
export default function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
    <div className={styles.post}>
    <img src={`./src/assets/posts/${post.id}/capa.png`} alt="Imagem de capa do post"  className={styles.capa}/>
    <h2 className={styles.titulo}>{post.titulo}</h2>
    <button className={styles.botaoLer}>Ler</button>
    </div>
    </Link>
    
  )
}
