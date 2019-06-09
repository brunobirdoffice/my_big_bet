const User = require('../model/user.model')

exports.createUser = (req, res) => {
    let user = new User({
        userName: req.body.userName,
        passWord: req.body.passWord
    })
    user.save((err) => {
        if (err) {
            return res.status(500).send('user not created: "' + err.message + '"')
        }
        res.status(201).send(user)
    })
}

exports.updateUser = (req, res) => {
    const query = { _id: req.params.id }
    User.findOneAndUpdate(query, {
        userName: req.body.userName,
        passWord: req.body.passWord
    }, { new: true }, (err, user) => {
        if (err) {
            return res.status(500).send('user not update: "' + err.message + '"')
        }
        res.status(201).send(user)
    })
}

exports.getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send('User not found: "' + err.message + '"')
        }
        res.status(200).send(user)
    })
}

exports.deleteUser = (req, res) => {
    const query = { _id: req.params.id }
    User.findByIdAndRemove(query, (err, user) => {
        if (err) {
            return res.status(500).send('User not deleted: "' + err.message + '"')
        }
        res.status(204).send('user deleted')
    })
}

exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).send('Users not found: "' + err.message + '"')
        }
        res.status(200).send(users)
    })
}