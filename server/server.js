const express = require('express')
const app = express()

const cors = require('cors')

//db
require('./config/db')
//router
const router = require('./router')

app.use(cors())
app.use(express.json())

app.use('/api/user', router)

app.listen(8080, () => {
    console.log("app start 3000")
})