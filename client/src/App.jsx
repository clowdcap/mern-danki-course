import React, { useEffect, useState } from 'react'
import './app.scss'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import NoticiaPrevia from './components/noticiaPrevia/NoticiaPrevia';
import Noticia from './components/noticia/Noticia';

import api from './Api';
import axios from 'axios';


const App = () => {

    const [noticias, setNoticias] = useState(null)

    useEffect(()=> {
        api.get('/').then((res) => {
            setNoticias(res.data)
        })
    })

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/noticias/:id">
                    <div className="wrapper">
                        <Header />
                        <Noticia />
                    </div>
                </Route>
                <Route path="/">
                    <div className="wrapper">
                        <Header />
                        <div className="home">
                            {noticias?.map(data => {
                                let slug = `noticias/${data.slug}`
                                return (
                                    <Link className='link__dom' to={slug}>
                              
                                            <NoticiaPrevia conteudo={data.post} titulo={data.titulo} key={data._id}/>
                                     
                                    </Link>
                                )}
                            )}
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default App