const mongoose = require('mongoose')

const connect = mongoose.connect('mongodb+srv://admin:admin@cluster0.bty0d.mongodb.net/firstApp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
connect.then(() => {
    console.log("connection success")
}).catch(error => {
    console.log("connection error")
})