import React from 'react'
import { useParams } from 'react-router-dom'
import posts from 'assets/posts/json/posts.json'
import PostModelo from 'components/PostModelo';
import fotoCapa from `assets/posts/1/capa.png`
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })
    console.log(post);
   
  return (
    <PostModelo 
    fotoCapa={fotoCapa}
    titulo={post.titulo}>
    <ReactMarkdown>
        {post.texto}
    </ReactMarkdown>
    </PostModelo>
  )
}
