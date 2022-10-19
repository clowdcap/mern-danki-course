const express = require('express')
const cors = require('cors')
const session = require('express-session')
const fileupload = require('express-fileupload')
const fs = require('fs')
var path = require('path')
const credentials = require('./credentials')

const mongoose = require('mongoose')
const Noticia = require('./models/Noticia')

mongoose.connect(credentials.chave, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log('MongoDB :: Servidor Conectado')
}).catch((error)=> {
    console.log(error.message)
})

const app = express()
app.use(express.json())
app.use(cors())
app.use(session({secret: 'shauidxfvyuigfuifvyuifyiuuiaxvsaxsauisavasui'}))
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))

app.get('/', (req, res) => {
    res.json([{'titulo':'Titulo da Noticia'}])
})

app.get('/noticias', (req, res) => {
    Noticia.find({}, (err, noticias)=> {
        res.json(noticias)
    })
})

app.get('/noticias/:slug', (req, res) => {
    Noticia.find({slug:req.params.slug}, (err, noticias)=> {
        res.json(noticias)
    })
})

app.get('/contato', (req, res) => {
    res.send('Pagina Contato')
})

const PORT = 5000
const URL = 'http://localhost'
app.listen(PORT, ()=> {
    try {
        console.log(`Express :: ${URL}:${PORT}`)
        console.log('Node Js :: Servidor Conectado')
    } catch (error) {
        console.log(error)
    }
})
