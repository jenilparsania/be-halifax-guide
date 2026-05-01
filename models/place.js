const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true },
    category: {
        type: String,
        anum : ['food','cafe','bar','park','market'],
        required : true,
    },
    lat : {type : Number, required: true},
    lng: {type:Number, required: true},

})

module.exports = mongoose.model('Place',placeSchema)
