const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema =  new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    charClass: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    titles: {
        type: [String]
    }
})

module.exports = Character = mongoose.model("characters", CharacterSchema);