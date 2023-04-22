import React from 'react'
import Banner from '../../components/Banner/index'
import styles from './Home.module.css'
import posts from "../../assets/posts/json/posts.json"
import Post from '../../components/Post'

export default function Home() {
  return (
    <main>
    <Banner/>
     <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}

     </ul>
    </main>
  )
}
