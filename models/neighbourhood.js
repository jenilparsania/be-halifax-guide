const mongoose = require('mongoose')


const neighbourhoodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    color : {type : String, required: true},
    vide: {type : String},
    coords : [[Number]]
})

module.exports = mongoose.model('Neighbourhood',neighbourhoodSchema)
