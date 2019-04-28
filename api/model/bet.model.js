const mongoose = require('mongoose')
const schema = mongoose.Schema

// Bet Mapping for MongoDB
let betSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    game: { type: Schema.Types.ObjectId, ref: 'Game' }
})

module.exports = mongoose.model('Bet', betSchema)