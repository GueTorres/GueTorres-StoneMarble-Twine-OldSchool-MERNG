const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({
    _id: ObjectId, 
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

module.exports = mongoose.model('Monster', monsterSchema);