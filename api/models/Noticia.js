const mongoose = require('mongoose')
const Schema = mongoose.Schema
const NoticiaSchema = new Schema({
    titulo: String,
    autor: String,
    post: String,
    slug: String,
    date: { type: Date, default: Date.now },
}, { collection: 'noticia' })
NoticiaSchema.path('_id')

const Noticia = mongoose.model('Noticia', NoticiaSchema)

module.exports = Noticia