const User = require('../model/user.model')

exports.createUser = (req, res) => {
    let user = new User({
        userName: req.body.userName,
        passWord: req.body.passWord
    })
    user.save((err) => {
        if (err) {
            return res.status(500).send('user not created')
        }
        res.send(user)
    })
}

exports.getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send('User not found')
        }
        res.send(user)
    })
}

exports.updateUser = (req, res) => {
    const query = { _id: req.params.id }
    User.findOneAndUpdate(query, {
        $set: req.body
    }, (err, user) => {
        if (err) {
            return res.status(500).send('User not found')
        }
        res.send(user)
    })
}

exports.deleteUser = (req, res) => {
    const query = { _id: req.params.id }
    User.findOneAndDelete(query, {
        $set: req.body
    }, (err, user) => {
        if (err) {
            return res.status(500).send('User not found')
        }
        res.send(user)
    })
}