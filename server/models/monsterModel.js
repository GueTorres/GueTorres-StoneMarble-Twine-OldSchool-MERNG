const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
    id: String, 
    name: String, 
    AC: Number, 
    HD: Number, 
    Att: String, 
    THAC0: Number, 
    MV: Number, 
    D: Number, 
    W: Number, 
    P: Number, 
    B: Number, 
    S: Number, 
    ML: Number, 
    AL: String, 
    XP: Number, 
    NA: String, 
    TT: String
})

module.exports = mongoose.model('Monsters', monsterSchema);