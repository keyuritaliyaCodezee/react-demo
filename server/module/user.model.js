const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require
    },
    address: {
        type: String,
        require
    }
})

module.exports = mongoose.model('User', userSchema)