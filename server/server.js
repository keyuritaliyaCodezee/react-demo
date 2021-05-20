const express = require('express')
const app = express()

const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 8080

//db
require('./config/db')

//router
const router = require('./router')

app.use(cors())
app.use(express.json())

app.use('/api/user', router)

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})