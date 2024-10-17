const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pilotoSchema = new Schema ({
    nombre:{
        type:String,
        required: true
    },
    nacionalidad:{
        type:String,
        required: true
    },
    escuderia: {
        type:String,
        required: true
    },
    victorias:{
        type:String,
        required: true
    },
    foto:{
        type:String,
        required: true
    }
})


module.exports = mongoose.model('Piloto', pilotoSchema);