const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema

// User Mapping for MongoDB
let userSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    userName: { type: String, required: true, unique: true, max: 2500 },
    passWord: { type: String, required: true, max: 250 },
    role: { type: String, enum: ['Client', 'Admin'], default: 'Client' }
})

// hash password before save User
userSchema.pre('save', function (next) {
    let user = this
    if (this.isModified('passWord') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(user.passWord, salt, function (err, hash) {
                if (err) {
                    return next(err)
                }
                user.passWord = hash
                next()
            })
        })
    } else {
        return next()
    }
})

userSchema.methods.verifyPassword = (pw) => {
    bcrypt.compare(pw, this.password, (err, isMatch) => {
        if (err) {
            return err
        }
        return isMatch
    })
}

module.exports = mongoose.model('User', userSchema)