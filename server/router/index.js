const express = require('express')
const User = require('../module/user.model')

const router = express.Router()

router.get('/getUser', (req, res) => {
    User.find({}).then((data) => {
        res.status(200).send(data)
    })
})

router.post('/addEditUser', (req, res) => {
    console.log("user req", req.body)
    try {
        const Users = new User({
            userName: req.body.userName,
            address: req.body.address
        })
        const data = Users.save()
        res.status(200).send({ message: "user add success" })
    }catch {
        res.status(400).send({ error: 'user add unsuccess' })
    }
    
})

module.exports = router