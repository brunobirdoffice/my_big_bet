const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema

// User Mapping for MongoDB
let userSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    userName: { type: String, required: true, unique: true, max: 250 },
    passWord: { type: String, required: true, max: 250 },
    role: { type: String, enum: ['client', 'admin'], default: 'client' }
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

// check if password is the same
userSchema.methods.verifyPassword = (passWord, user) => {
    return bcrypt.compareSync(passWord, user.passWord)
}

module.exports = mongoose.model('User', userSchema)