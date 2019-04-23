const mongoose = require('mongoose')
const schema = mongoose.Schema

// User Mapping for MongoDB
let userSchema = new schema({
    _id: schema.Types.ObjectId,
    userName: { type: String, required: true, max: 2500 },
    passWord: { type: String, required: true, max: 250 }
})

module.exports = mongoose.model('User', userSchema)