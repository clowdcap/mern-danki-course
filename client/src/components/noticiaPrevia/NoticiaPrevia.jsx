import React from 'react'
import './noticiaPrevia.scss'

const NoticiaPrevia = (props) => {
  return (
    <div className="noticia__lista" key={props._id}>
        <h3>{props.titulo}</h3>
        <p>{props.conteudo}</p>
    </div>
  )
}

export default NoticiaPrevia