const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = Schema({
    name : {
        type : String,
        unique : false
    },
    lastname : {
        type : String,
        unique : false
    },
    fathername : {
        type : String,
        unique : false
    }
},{
    timestamps : true
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;