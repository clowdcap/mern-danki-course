import React from 'react'
import './noticia.scss'

import { useParams } from 'react-router-dom'

const Noticia = (props) => {

    const {id} = useParams()

  return (
    <div className="noticias__single">
        <h2>Estou na noticia single {id}</h2>
    </div>
  )
}

export default Noticia