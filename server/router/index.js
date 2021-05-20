const express = require('express')
const User = require('../module/user.model')

const router = express.Router()

router.get('/getUser', (req, res) => {
    try {
        User.find({}).then((data) => {
            res.status(200).send(data)
        })
    } catch(error) {
        res.status(500).send('Something went wrong')
    }
})

router.post('/addUser', async (req, res) => {
    try {
        const Users = new User({
            userName: req.body.userName,
            address: req.body.address
        })
        await Users.save()
        res.status(200).send({ message: "user add success" })
    }catch {
        res.status(500).send({ error: 'user add unsuccess' })
    }
})

router.post('/deleteUser', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.body._id).then(() => {
            res.status(200).send({ message: "user delete success" })
        })
    }catch {
        res.status(500).send({ error: 'user delete unsuccess' })
    }
})

module.exports = router