const express = require('express')
const User = require('../module/user.model')

const router = express.Router()

router.get('/getUser', (req, res) => {
    User.find({}).then((data) => {
        res.status(200).send(data)
    })
})

router.post('/addUser', (req, res) => {
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

router.post('/deleteUser', (req, res) => {
    try {
        User.find({ userName : req.body.userName}).then((result) => {
            User.findByIdAndDelete({ _id: result[0]._id}).then(() => {
                res.status(200).send({ message: "user delete success" })
            })
        })
    }catch {
        res.status(400).send({ error: 'user delete unsuccess' })
    }
})

module.exports = router