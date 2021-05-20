const mongoose = require('mongoose')

const URL = process.env.ATLAS_URL

const connect = mongoose.connect(URL , {
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