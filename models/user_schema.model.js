const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
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

const User = mongoose.model('User', userSchema);

module.exports = User;