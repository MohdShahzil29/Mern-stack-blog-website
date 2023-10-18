const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'username is require']
    },
    email: {
        type: String,
        message: [true, 'Email is require']
    },   
     password: {
        type: String,
        message: [true, 'Password is require']
    },
    role: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)